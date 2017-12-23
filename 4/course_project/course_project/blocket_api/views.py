from django.shortcuts import HttpResponse
from urllib.request import Request, urlopen
from bs4 import BeautifulSoup
from datetime import datetime

import ssl
import re


def current_datetime(request):
    """
    Testfunktion för AJAX requests, verifierar att HTML kan hämtas och visas från servern.
    """
    now = datetime.now()
    html = "<html><body>It is now %s.</body></html>" % now
    return HttpResponse(html)


def get_blocket_search_params(request):
    """
    Hämtar information från Blocket för att användaren ska kunna välja region och kategorier som han/hon vill genomföra
    sökningen för.
    """
    context = ssl._create_unverified_context()

    def get_regions():
        """

        :return: ?JSONResponse
        """

        def get_sub_regions(href, origin):
            """

            :param href:
            :param origin:
            :return:
            """
            print(origin + " << being handled to get sub regions.")

            sub_region_request = Request(href)
            response = urlopen(sub_region_request, context=context)
            html = response.read()

            soup = BeautifulSoup(html, 'html.parser')

            anchor_list = list()

            for anchor in soup.find_all('a'):
                if anchor.text.strip() != origin:
                    anchor_list.append((anchor.text.strip(), anchor.get('href')))
                else:
                    anchor_list.append(("Hela regionen", anchor.get('href')))

            return anchor_list

        re_get_sub_regions = re.compile(r".+(.)htm$")
        region_request = Request('https://www.blocket.se')

        response = urlopen(region_request, context=context)

        html = response.read()
        soup = BeautifulSoup(html, 'html.parser')

        anchors = [(anchor.text, anchor.get('href'))
                   if not re_get_sub_regions.match(anchor.get('href'))
                   else (anchor.text, get_sub_regions(anchor.get('href'), anchor.text))
                   for anchor in soup.find_all('a', class_='region_link_list')]

        [print(anchor) for anchor in anchors]

        return anchors







