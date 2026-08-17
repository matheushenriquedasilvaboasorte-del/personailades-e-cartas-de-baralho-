from __future__ import annotations

import os
from pathlib import Path

import qrcode
from PIL import Image, ImageDraw, ImageFont
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.pdfgen import canvas

ROOT = Path(__file__).resolve().parent
CARD_DIR = ROOT / 'assets' / 'cards'
QR_DIR = ROOT / 'assets' / 'qr'
IMPRESSAO_DIR = ROOT / 'impressao'

BASE_URL = 'https://matheushenriquedasilvaboasorte-del.github.io/personailades-e-cartas-de-baralho-/'

SUITS = {
    'copas': {'symbol': '♥', 'color': '#b72035', 'label': 'Copas'},
    'ouros': {'symbol': '♦', 'color': '#b72035', 'label': 'Ouros'},
    'paus': {'symbol': '♣', 'color': '#111111', 'label': 'Paus'},
    'espadas': {'symbol': '♠', 'color': '#111111', 'label': 'Espadas'},
    'coringas': {'symbol': 'J', 'color': '#d39b3a', 'label': 'Coringas'},
}

CARD_IDS = [
    'copas-a','copas-2','copas-3','copas-4','copas-5','copas-6','copas-7','copas-8','copas-9','copas-10','copas-j','copas-q','copas-k',
    'ouros-a','ouros-2','ouros-3','ouros-4','ouros-5','ouros-6','ouros-7','ouros-8','ouros-9','ouros-10','ouros-j','ouros-q','ouros-k',
    'paus-a','paus-2','paus-3','paus-4','paus-5','paus-6','paus-7','paus-8','paus-9','paus-10','paus-j','paus-q','paus-k',
    'espadas-a','espadas-2','espadas-3','espadas-4','espadas-5','espadas-6','espadas-7','espadas-8','espadas-9','espadas-10','espadas-j','espadas-q','espadas-k',
    'joker-vermelho','joker-preto'
]


def ensure_dirs():
    CARD_DIR.mkdir(parents=True, exist_ok=True)
    QR_DIR.mkdir(parents=True, exist_ok=True)
    IMPRESSAO_DIR.mkdir(parents=True, exist_ok=True)


def load_font(size: int):
    try:
        return ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf', size=size)
    except Exception:
        return ImageFont.load_default()


def make_card_png(card_id: str):
    suit_key = card_id.split('-')[0]
    if card_id.startswith('joker'):
        suit_key = 'coringas'
    rank = card_id.split('-')[-1]
    if card_id.startswith('joker'):
        rank = 'Joker'
    suit = SUITS[suit_key]
    symbol = suit['symbol']
    fill = suit['color']
    img = Image.new('RGBA', (900, 1260), '#f2eadb')
    draw = ImageDraw.Draw(img)

    margin = 42
    border = 26
    draw.rounded_rectangle((margin, margin, img.width - margin, img.height - margin), radius=54, fill='#f4efe6', outline='#d7c6a4', width=8)
    draw.rounded_rectangle((margin + 10, margin + 10, img.width - margin - 10, img.height - margin - 10), radius=50, fill='#f7f3eb', outline='#d7c6a4', width=3)

    title_font = load_font(68)
    small_font = load_font(30)
    big_symbol_font = load_font(160)
    center_font = load_font(84)
    corner_font = load_font(92)

    draw.text((86, 70), rank, font=corner_font, fill=fill)
    draw.text((84, 145), symbol, font=small_font, fill=fill)
    draw.text((img.width - 178, img.height - 190), rank, font=corner_font, fill=fill, anchor='mm')
    draw.text((img.width - 150, img.height - 120), symbol, font=small_font, fill=fill)

    draw.text((img.width / 2, img.height / 2 - 40), symbol, font=big_symbol_font, fill=fill, anchor='mm')
    draw.text((img.width / 2, img.height / 2 + 100), rank, font=center_font, fill=fill, anchor='mm')

    label = suit['label']
    draw.text((img.width / 2, 80), label.upper(), font=title_font, fill=fill, anchor='mm')

    img.save(CARD_DIR / f'{card_id}.png')


def make_qr_png(card_id: str):
    qr = qrcode.QRCode(version=2, box_size=10, border=2, error_correction=qrcode.constants.ERROR_CORRECT_M)
    target = f'{BASE_URL}?carta={card_id}'
    qr.add_data(target)
    qr.make(fit=True)
    img = qr.make_image(fill_color='black', back_color='white')
    img = img.resize((360, 360), resample=0)
    img.save(QR_DIR / f'{card_id}.png')


def build_printing_layout():
    card_width = 63 * mm
    card_height = 88 * mm
    gap_x = 12 * mm
    gap_y = 12 * mm
    margin_left = 14 * mm
    margin_top = 18 * mm
    x_positions = [margin_left + i * (card_width + gap_x) for i in range(3)]
    y_positions = [A4[1] - margin_top - card_height - j * (card_height + gap_y) for j in range(3)]

    front_pdf = canvas.Canvas(str(IMPRESSAO_DIR / 'baralho-frentes-A4.pdf'), pagesize=A4)
    back_pdf = canvas.Canvas(str(IMPRESSAO_DIR / 'baralho-versos-QR-A4.pdf'), pagesize=A4)

    for page_index in range((len(CARD_IDS) + 8) // 9):
        start = page_index * 9
        cards_page = CARD_IDS[start:start + 9]
        for idx, card_id in enumerate(cards_page):
            row = idx // 3
            col = idx % 3
            x = x_positions[col]
            y = y_positions[row]
            front_pdf.drawImage(str(CARD_DIR / f'{card_id}.png'), x, y, width=card_width, height=card_height)
            qr_img = str(QR_DIR / f'{card_id}.png')
            back_pdf.drawImage(qr_img, x + 18 * mm, y + 18 * mm, width=card_width - 36 * mm, height=card_width - 36 * mm)
            back_pdf.setStrokeColor(colors.grey)
            back_pdf.setLineWidth(1)
            back_pdf.roundRect(x, y, card_width, card_height, 8 * mm, stroke=1, fill=0)
            back_pdf.setFillColor(colors.black)
            back_pdf.setFont('Helvetica-Bold', 12)
            back_pdf.drawCentredString(x + card_width / 2, y + 12 * mm, 'QR - Carta')
            back_pdf.setFillColor(colors.white)
            back_pdf.roundRect(x + 10 * mm, y + 10 * mm, card_width - 20 * mm, card_height - 20 * mm, 7 * mm, stroke=0, fill=1)
            back_pdf.drawImage(qr_img, x + 26 * mm, y + 26 * mm, width=card_width - 52 * mm, height=card_width - 52 * mm)

        front_pdf.showPage()
        back_pdf.showPage()

    front_pdf.save()
    back_pdf.save()


def write_printing_instructions():
    instructions = '''INSTRUÇÕES DE IMPRESSÃO

1. Use papel A4, orientação retrato.
2. Imprima as frentes e os versos em modo frente e verso, com borda longa.
3. Ajuste escala para 100% e desative qualquer "fit to page".
4. O arquivo baralho-frentes-A4.pdf contém as faces das cartas.
5. O arquivo baralho-versos-QR-A4.pdf contém os versos com QR Code para cada carta.
6. A medida das cartas é aproximadamente 63 x 88 mm.
7. O layout coloca 9 cartas por folha.
8. Para a impressão frente e verso na borda longa, escolha a opção:
   - frente: na parte de cima da página
   - verso: espelhado na página seguinte, com borda longa
9. Recomenda-se usar papel cartão ou papel fotográfico 250-300 g/m² para maior qualidade.
'''
    (IMPRESSAO_DIR / 'INSTRUCOES-IMPRESSAO.txt').write_text(instructions, encoding='utf-8')


def main():
    ensure_dirs()
    for card_id in CARD_IDS:
        make_card_png(card_id)
        make_qr_png(card_id)
    build_printing_layout()
    write_printing_instructions()
    print(f'Gerados {len(CARD_IDS)} cards e {len(CARD_IDS)} QR codes em {CARD_DIR} e {QR_DIR}.')
    print(f'Arquivos de impressão em {IMPRESSAO_DIR}.')


if __name__ == '__main__':
    main()
