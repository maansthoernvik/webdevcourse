from urllib.request import Request, urlopen
from bs4 import BeautifulSoup
import ssl
import re

context = ssl._create_unverified_context()


def get_sub_regions(href, origin):
    print(origin + " << being handled to get sub regions.")

    req = Request(href)
    response = urlopen(req, context=context)
    html = response.read()

    soup = BeautifulSoup(html, 'html.parser')

    anchor_list = []

    for anchor in soup.find_all('a'):
        if anchor.text.strip() != origin:
            anchor_list.append((anchor.text.strip(), anchor.get('href')))
        else:
            anchor_list.append(("Hela regionen", anchor.get('href')))

    return anchor_list


re_get_sub_regions = re.compile(r".+(.)htm$")
req = Request('https://www.blocket.se')

response = urlopen(req, context=context)

html = response.read()
soup = BeautifulSoup(html, 'html.parser')

anchors = [(anchor.text, anchor.get('href'))
           if not re_get_sub_regions.match(anchor.get('href'))
           else (anchor.text, get_sub_regions(anchor.get('href'), anchor.text))
           for anchor in soup.find_all('a', class_='region_link_list')]

[print(anchor) for anchor in anchors]

