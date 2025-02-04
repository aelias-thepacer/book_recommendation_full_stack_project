import { DataTypes, Sequelize, Model, Optional } from 'sequelize';

interface BookAttributes {
  id: number;
  title: string;
  authors: string[];
  publishedDate: string;
  description: string;
  pageCount: number;
  maturityRating: string;
  thumbnail: string;
  language: string;
  bookLink: string;
}

interface BookCreationAttributes extends Optional<BookAttributes, 'id'> {}

export class Book extends Model<BookAttributes, BookCreationAttributes> implements BookAttributes {
  public id!: number;
  public title!: string;
  public authors!: string[];
  public publishedDate!: string;
  public description!: string;
  public pageCount!: number;
  public maturityRating!: string;
  public thumbnail!: string;
  public language!: string;
  public bookLink!: string;
}

export function BookFactory(sequelize: Sequelize): typeof Book {
  Book.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      authors: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      publishedDate: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      pageCount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      maturityRating: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      thumbnail: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      language: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      bookLink: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: 'Book',
      sequelize,
    }
  );

  return Book;
}


// required search string https://www.googleapis.com/books/v1/volumes?q=search+terms
// search+inauthor
// search+intitle
// search+subject

/*
Items to grab
Title
Authors
Publishing date?
Link to the book on google books?
maturity rating
imagelinks
language
description
pagecount
*/


/*
{
  "kind": "books#volumes",
  "totalItems": 2290,
  "items": [
    {
      "kind": "books#volume",
      "id": "3A0AAAAAMBAJ",
      "etag": "hXOR98DSzZs",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/3A0AAAAAMBAJ",
      "volumeInfo": {
        "title": "Bulletin of the Atomic Scientists",
        "publishedDate": "1948-08",
        "description": "The Bulletin of the Atomic Scientists is the premier public resource on scientific and technological developments that impact global security. Founded by Manhattan Project Scientists, the Bulletin's iconic \"Doomsday Clock\" stimulates solutions for a safer world.",
        "readingModes": {
          "text": false,
          "image": true
        },
        "pageCount": 32,
        "printType": "MAGAZINE",
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "0.1.2.0.preview.1",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=3A0AAAAAMBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=3A0AAAAAMBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=3A0AAAAAMBAJ&printsec=frontcover&dq=%7Bid%7D&hl=&cd=1&source=gbs_api",
        "infoLink": "http://books.google.com/books?id=3A0AAAAAMBAJ&dq=%7Bid%7D&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Bulletin_of_the_Atomic_Scientists.html?hl=&id=3A0AAAAAMBAJ"
      },
      "saleInfo": {
        "country": "US",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "US",
        "viewability": "ALL_PAGES",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=3A0AAAAAMBAJ&hl=&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "The Bulletin of the Atomic Scientists is the premier public resource on scientific and technological developments that impact global security."
      }
    },
    {
      "kind": "books#volume",
      "id": "8AgAAAAAMBAJ",
      "etag": "UoaclZpq3oQ",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/8AgAAAAAMBAJ",
      "volumeInfo": {
        "title": "Bulletin of the Atomic Scientists",
        "publishedDate": "1955-04",
        "description": "The Bulletin of the Atomic Scientists is the premier public resource on scientific and technological developments that impact global security. Founded by Manhattan Project Scientists, the Bulletin's iconic \"Doomsday Clock\" stimulates solutions for a safer world.",
        "readingModes": {
          "text": false,
          "image": true
        },
        "pageCount": 64,
        "printType": "MAGAZINE",
        "averageRating": 1,
        "ratingsCount": 1,
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "0.1.2.0.preview.1",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=8AgAAAAAMBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=8AgAAAAAMBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=8AgAAAAAMBAJ&printsec=frontcover&dq=%7Bid%7D&hl=&cd=2&source=gbs_api",
        "infoLink": "http://books.google.com/books?id=8AgAAAAAMBAJ&dq=%7Bid%7D&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Bulletin_of_the_Atomic_Scientists.html?hl=&id=8AgAAAAAMBAJ"
      },
      "saleInfo": {
        "country": "US",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "US",
        "viewability": "ALL_PAGES",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=8AgAAAAAMBAJ&hl=&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "The Bulletin of the Atomic Scientists is the premier public resource on scientific and technological developments that impact global security."
      }
    },
    {
      "kind": "books#volume",
      "id": "ogkAAAAAMBAJ",
      "etag": "pV8atPq6wQo",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/ogkAAAAAMBAJ",
      "volumeInfo": {
        "title": "Bulletin of the Atomic Scientists",
        "publishedDate": "1959-02",
        "description": "The Bulletin of the Atomic Scientists is the premier public resource on scientific and technological developments that impact global security. Founded by Manhattan Project Scientists, the Bulletin's iconic \"Doomsday Clock\" stimulates solutions for a safer world.",
        "readingModes": {
          "text": false,
          "image": true
        },
        "pageCount": 48,
        "printType": "MAGAZINE",
        "averageRating": 2.5,
        "ratingsCount": 2,
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=ogkAAAAAMBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=ogkAAAAAMBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=ogkAAAAAMBAJ&printsec=frontcover&dq=%7Bid%7D&hl=&cd=3&source=gbs_api",
        "infoLink": "http://books.google.com/books?id=ogkAAAAAMBAJ&dq=%7Bid%7D&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Bulletin_of_the_Atomic_Scientists.html?hl=&id=ogkAAAAAMBAJ"
      },
      "saleInfo": {
        "country": "US",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "US",
        "viewability": "ALL_PAGES",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=ogkAAAAAMBAJ&hl=&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "The Bulletin of the Atomic Scientists is the premier public resource on scientific and technological developments that impact global security."
      }
    },
    {
      "kind": "books#volume",
      "id": "XAgAAAAAMBAJ",
      "etag": "V0fVjGRU/W0",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/XAgAAAAAMBAJ",
      "volumeInfo": {
        "title": "Bulletin of the Atomic Scientists",
        "publishedDate": "1966-01",
        "description": "The Bulletin of the Atomic Scientists is the premier public resource on scientific and technological developments that impact global security. Founded by Manhattan Project Scientists, the Bulletin's iconic \"Doomsday Clock\" stimulates solutions for a safer world.",
        "readingModes": {
          "text": false,
          "image": true
        },
        "pageCount": 48,
        "printType": "MAGAZINE",
        "averageRating": 5,
        "ratingsCount": 1,
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "0.0.2.0.preview.1",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=XAgAAAAAMBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=XAgAAAAAMBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=XAgAAAAAMBAJ&printsec=frontcover&dq=%7Bid%7D&hl=&cd=4&source=gbs_api",
        "infoLink": "http://books.google.com/books?id=XAgAAAAAMBAJ&dq=%7Bid%7D&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Bulletin_of_the_Atomic_Scientists.html?hl=&id=XAgAAAAAMBAJ"
      },
      "saleInfo": {
        "country": "US",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "US",
        "viewability": "ALL_PAGES",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=XAgAAAAAMBAJ&hl=&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "The Bulletin of the Atomic Scientists is the premier public resource on scientific and technological developments that impact global security."
      }
    },
    {
      "kind": "books#volume",
      "id": "EsUeOG9n1fYC",
      "etag": "DWNMofCFPTg",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/EsUeOG9n1fYC",
      "volumeInfo": {
        "title": "Ebony",
        "publishedDate": "1960-01",
        "description": "EBONY is the flagship magazine of Johnson Publishing. Founded in 1945 by John H. Johnson, it still maintains the highest global circulation of any African American-focused magazine.",
        "readingModes": {
          "text": false,
          "image": true
        },
        "pageCount": 112,
        "printType": "MAGAZINE",
        "averageRating": 2,
        "ratingsCount": 9,
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "0.0.1.0.preview.1",
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=EsUeOG9n1fYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=EsUeOG9n1fYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=EsUeOG9n1fYC&printsec=frontcover&dq=%7Bid%7D&hl=&cd=5&source=gbs_api",
        "infoLink": "http://books.google.com/books?id=EsUeOG9n1fYC&dq=%7Bid%7D&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Ebony.html?hl=&id=EsUeOG9n1fYC"
      },
      "saleInfo": {
        "country": "US",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "US",
        "viewability": "ALL_PAGES",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=EsUeOG9n1fYC&hl=&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "EBONY is the flagship magazine of Johnson Publishing. Founded in 1945 by John H. Johnson, it still maintains the highest global circulation of any African American-focused magazine."
      }
    },
    {
      "kind": "books#volume",
      "id": "N0EEAAAAMBAJ",
      "etag": "unwukLBRbQo",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/N0EEAAAAMBAJ",
      "volumeInfo": {
        "title": "LIFE",
        "publishedDate": "1936-11-23",
        "description": "LIFE Magazine is the treasured photographic magazine that chronicled the 20th Century. It now lives on at LIFE.com, the largest, most amazing collection of professional photography on the internet. Users can browse, search and view photos of today’s people and events. They have free access to share, print and post images for personal use.",
        "readingModes": {
          "text": false,
          "image": true
        },
        "pageCount": 96,
        "printType": "MAGAZINE",
        "averageRating": 3.5,
        "ratingsCount": 5,
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "0.0.1.0.preview.1",
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=N0EEAAAAMBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=N0EEAAAAMBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=N0EEAAAAMBAJ&printsec=frontcover&dq=%7Bid%7D&hl=&cd=6&source=gbs_api",
        "infoLink": "http://books.google.com/books?id=N0EEAAAAMBAJ&dq=%7Bid%7D&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/LIFE.html?hl=&id=N0EEAAAAMBAJ"
      },
      "saleInfo": {
        "country": "US",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "US",
        "viewability": "ALL_PAGES",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=N0EEAAAAMBAJ&hl=&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "LIFE Magazine is the treasured photographic magazine that chronicled the 20th Century. It now lives on at LIFE.com, the largest, most amazing collection of professional photography on the internet."
      }
    },
    {
      "kind": "books#volume",
      "id": "fZV6HSls7toC",
      "etag": "DLw1Y9PuglY",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/fZV6HSls7toC",
      "volumeInfo": {
        "title": "Official Gazette - Republic of the Philippines",
        "authors": [
          "Philippines"
        ],
        "publishedDate": "1969",
        "industryIdentifiers": [
          {
            "type": "OTHER",
            "identifier": "OSU:32437010833313"
          }
        ],
        "readingModes": {
          "text": false,
          "image": true
        },
        "pageCount": 230,
        "printType": "BOOK",
        "categories": [
          "Gazettes"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "1.3.5.0.full.1",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=fZV6HSls7toC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=fZV6HSls7toC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=fZV6HSls7toC&pg=PA133&dq=%7Bid%7D&hl=&cd=7&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=fZV6HSls7toC&source=gbs_api",
        "canonicalVolumeLink": "https://play.google.com/store/books/details?id=fZV6HSls7toC"
      },
      "saleInfo": {
        "country": "US",
        "saleability": "FREE",
        "isEbook": true,
        "buyLink": "https://play.google.com/store/books/details?id=fZV6HSls7toC&rdid=book-fZV6HSls7toC&rdot=1&source=gbs_api"
      },
      "accessInfo": {
        "country": "US",
        "viewability": "ALL_PAGES",
        "embeddable": true,
        "publicDomain": true,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false,
          "downloadLink": "http://books.google.com/books/download/Official_Gazette_Republic_of_the_Philipp.epub?id=fZV6HSls7toC&hl=&output=epub&source=gbs_api"
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=fZV6HSls7toC&hl=&source=gbs_api",
        "accessViewStatus": "FULL_PUBLIC_DOMAIN",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "... \u003Cb\u003Eid\u003C/b\u003E , no33 , Aug18 , p8716 ; \u003Cb\u003Eid\u003C/b\u003E , no34 , Aug25 , p8979 . Navo , Feliciano , applicant . Pawili River in San Roque , Bula - no31 , Aug4 , p8112 ; \u003Cb\u003Eid\u003C/b\u003E , no32 , Aug11 , p8415 ; \u003Cb\u003Eid\u003C/b\u003E , no33 , Aug18 , p8715 ; \u003Cb\u003Eid\u003C/b\u003E , no34 , Aug25 , p8978&nbsp;..."
      }
    },
    {
      "kind": "books#volume",
      "id": "DCyyrIWOX_EC",
      "etag": "4FXnRbGwwM0",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/DCyyrIWOX_EC",
      "volumeInfo": {
        "title": "Autoimmune Diseases: New Insights for the Healthcare Professional: 2013 Edition",
        "publisher": "ScholarlyEditions",
        "publishedDate": "2013-07-22",
        "description": "Autoimmune Diseases: New Insights for the Healthcare Professional: 2013 Edition is a ScholarlyEditions™ book that delivers timely, authoritative, and comprehensive information about Genetics. The editors have built Autoimmune Diseases: New Insights for the Healthcare Professional: 2013 Edition on the vast information databases of ScholarlyNews.™ You can expect the information about Genetics in this book to be deeper than what you can access anywhere else, as well as consistently reliable, authoritative, informed, and relevant. The content of Autoimmune Diseases: New Insights for the Healthcare Professional: 2013 Edition has been produced by the world’s leading scientists, engineers, analysts, research institutions, and companies. All of the content is from peer-reviewed sources, and all of it is written, assembled, and edited by the editors at ScholarlyEditions™ and available exclusively from us. You now have a source you can cite with authority, confidence, and credibility. More information is available at http://www.ScholarlyEditions.com/.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9781481650878"
          },
          {
            "type": "ISBN_10",
            "identifier": "1481650874"
          }
        ],
        "readingModes": {
          "text": false,
          "image": true
        },
        "pageCount": 553,
        "printType": "BOOK",
        "categories": [
          "Medical"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "0.2.2.0.preview.1",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=DCyyrIWOX_EC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=DCyyrIWOX_EC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=DCyyrIWOX_EC&pg=PA175&dq=%7Bid%7D&hl=&cd=8&source=gbs_api",
        "infoLink": "http://books.google.com/books?id=DCyyrIWOX_EC&dq=%7Bid%7D&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Autoimmune_Diseases_New_Insights_for_the.html?hl=&id=DCyyrIWOX_EC"
      },
      "saleInfo": {
        "country": "US",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "US",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.com/books/download/Autoimmune_Diseases_New_Insights_for_the-sample-pdf.acsm?id=DCyyrIWOX_EC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "webReaderLink": "http://play.google.com/books/reader?id=DCyyrIWOX_EC&hl=&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "\u003Cb\u003EID\u003C/b\u003E NO. 8); FRHCitHPDEA (SEQ \u003Cb\u003EID\u003C/b\u003E NO. 9); FPSCitGKSSS (SEQ \u003Cb\u003EID\u003C/b\u003E NO. 10); IQQCitMDGSL (SEQ \u003Cb\u003EID\u003C/b\u003E NO. 11); LTQCitGSVLR (SEQ \u003Cb\u003EID\u003C/b\u003E NO. 12); YHFCitVGSEA (SEQ \u003Cb\u003EID\u003C/b\u003E NO. 13); YDPCitNNSPY (SEQ \u003Cb\u003EID\u003C/b\u003E NO. 14); VSFCitGADYS (SEQ \u003Cb\u003EID\u003C/b\u003E NO. 15); YSLCitAVRMK (SEQ \u003Cb\u003EID\u003C/b\u003E NO&nbsp;..."
      }
    },
    {
      "kind": "books#volume",
      "id": "AJ4FAAAAQAAJ",
      "etag": "qjwLr/fATCw",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/AJ4FAAAAQAAJ",
      "volumeInfo": {
        "title": "Miscellaneous Documents",
        "subtitle": "30th Congress, 1st Session - 49th Congress, 1st Session",
        "authors": [
          "United States. Congress. House"
        ],
        "publishedDate": "1883",
        "industryIdentifiers": [
          {
            "type": "OTHER",
            "identifier": "OXFORD:555039100"
          }
        ],
        "readingModes": {
          "text": false,
          "image": true
        },
        "pageCount": 376,
        "printType": "BOOK",
        "categories": [
          "United States"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "0.10.10.0.full.1",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=AJ4FAAAAQAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=AJ4FAAAAQAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=AJ4FAAAAQAAJ&pg=PA11&dq=%7Bid%7D&hl=&cd=9&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=AJ4FAAAAQAAJ&source=gbs_api",
        "canonicalVolumeLink": "https://play.google.com/store/books/details?id=AJ4FAAAAQAAJ"
      },
      "saleInfo": {
        "country": "US",
        "saleability": "FREE",
        "isEbook": true,
        "buyLink": "https://play.google.com/store/books/details?id=AJ4FAAAAQAAJ&rdid=book-AJ4FAAAAQAAJ&rdot=1&source=gbs_api"
      },
      "accessInfo": {
        "country": "US",
        "viewability": "ALL_PAGES",
        "embeddable": true,
        "publicDomain": true,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false,
          "downloadLink": "http://books.google.com/books/download/Miscellaneous_Documents.epub?id=AJ4FAAAAQAAJ&hl=&output=epub&source=gbs_api"
        },
        "pdf": {
          "isAvailable": true,
          "downloadLink": "http://books.google.com/books/download/Miscellaneous_Documents.pdf?id=AJ4FAAAAQAAJ&hl=&output=pdf&sig=ACfU3U0XPY42KpcBMLzSyZQUpEj8bRYfVg&source=gbs_api"
        },
        "webReaderLink": "http://play.google.com/books/reader?id=AJ4FAAAAQAAJ&hl=&source=gbs_api",
        "accessViewStatus": "FULL_PUBLIC_DOMAIN",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "... \u003Cb\u003Eid\u003C/b\u003E . 316 ; Moore r . Robbins , 6 \u003Cb\u003Eid\u003C/b\u003E . 530 ; Wirth v . Branson , 8 \u003Cb\u003Eid\u003C/b\u003E . 118 ; Snyder r . Sickles , 8 \u003Cb\u003Eid\u003C/b\u003E . 203 ; Cowell v . Colo . Springs Co. , 10 \u003Cb\u003Eid\u003C/b\u003E . 55 ; Simmons v . Wagner , S. C. , Oct. T. , 1879 , in manuscript . Lewis v . Baird&nbsp;..."
      }
    },
    {
      "kind": "books#volume",
      "id": "C2JGAAAAYAAJ",
      "etag": "h97eUwnrrNE",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/C2JGAAAAYAAJ",
      "volumeInfo": {
        "title": "A General Digested Index to the Nine Volumes of Cowen's Reports of Cases Argued and Determined in the Supreme Court",
        "subtitle": "And in the Court for the Trial of Impeachments and the Correction of Errors of the State of New York",
        "authors": [
          "Esek Cowen",
          "New York (State). Supreme Court"
        ],
        "publishedDate": "1831",
        "industryIdentifiers": [
          {
            "type": "OTHER",
            "identifier": "NYPL:33433006868586"
          }
        ],
        "readingModes": {
          "text": false,
          "image": true
        },
        "pageCount": 568,
        "printType": "BOOK",
        "categories": [
          "Law reports, digests, etc"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "1.4.6.0.full.1",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=C2JGAAAAYAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=C2JGAAAAYAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=C2JGAAAAYAAJ&pg=PA556&dq=%7Bid%7D&hl=&cd=10&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=C2JGAAAAYAAJ&source=gbs_api",
        "canonicalVolumeLink": "https://play.google.com/store/books/details?id=C2JGAAAAYAAJ"
      },
      "saleInfo": {
        "country": "US",
        "saleability": "FREE",
        "isEbook": true,
        "buyLink": "https://play.google.com/store/books/details?id=C2JGAAAAYAAJ&rdid=book-C2JGAAAAYAAJ&rdot=1&source=gbs_api"
      },
      "accessInfo": {
        "country": "US",
        "viewability": "ALL_PAGES",
        "embeddable": true,
        "publicDomain": true,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false,
          "downloadLink": "http://books.google.com/books/download/A_General_Digested_Index_to_the_Nine_Vol.epub?id=C2JGAAAAYAAJ&hl=&output=epub&source=gbs_api"
        },
        "pdf": {
          "isAvailable": true,
          "downloadLink": "http://books.google.com/books/download/A_General_Digested_Index_to_the_Nine_Vol.pdf?id=C2JGAAAAYAAJ&hl=&output=pdf&sig=ACfU3U0Wc_tXG134BKebShR5M8Bgiu9pHA&source=gbs_api"
        },
        "webReaderLink": "http://play.google.com/books/reader?id=C2JGAAAAYAAJ&hl=&source=gbs_api",
        "accessViewStatus": "FULL_PUBLIC_DOMAIN",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "... \u003Cb\u003Eid\u003C/b\u003E Judgments and executions , 325 Habeas corpus , Habeas corpus ad subjiciendum , Habeas corpus ad testificandum , Habeas corpus cum causa , Hearsay , Heir , Heir ... \u003Cb\u003Eid id\u003C/b\u003E 383 Parties , Misnomer , 384 Partition , Mistake , 556 TABLE ."
      }
    }
  ]
}
*/