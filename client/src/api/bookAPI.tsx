import { ApiMessage } from "../interfaces/ApiMessage";
import { BookData } from "../interfaces/BookData";

const retrieveBooks = async () => {
  try {
    const response = await fetch('/api/books', {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error('invalid Book API response, check network tab!');
    }

    return data;
  } catch (err) {
    console.log('Error from data retrieval:', err);
    return [];
  }
};

const retrieveBook = async (id: number | null): Promise<BookData> => {
  try {
    const response = await fetch(`/api/books/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error('invalid Book API response, check network tab!');
    }

    return data;
  } catch (err) {
    console.log('Error from data retrieval:', err);
    return Promise.reject('Could not fetch Book');
  }
};

const createBook = async (body: BookData): Promise<BookData> => {
  try {
    const response = await fetch(
      '/api/books/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    }

    )
    const data = response.json();

    if (!response.ok) {
      throw new Error('invalid API response, check network tab!');
    }

    return data;

  } catch (err) {
    console.log('Error from Book Creation: ', err);
    return Promise.reject('Could not create Book');
  }
};

const updateBooks = async (id: number, body: BookData): Promise<BookData> => {
  try {
    const response = await fetch(
      `/api/books/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    }
    )
    const data = await response.json();

    if (!response.ok) {
      throw new Error('invalid API response, check network tab!');
    }

    return data;
  } catch (err) {
    console.error('Update did not work', err);
    return Promise.reject('Update did not work');
  }
};

const deleteBook = async (id: number): Promise<ApiMessage> => {
  try {
    const response = await fetch(
      `/api/books/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    }
    )
    const data = await response.json();

    if (!response.ok) {
      throw new Error('invalid API response, check network tab!');
    }

    return data;
  } catch (err) {
    console.error('Error in deleting Book', err);
    return Promise.reject('Could not delete Book');
  }
};

const searchBooks = async (search: string): Promise<BookData[]> => {
  try {
    console.log(search);
    const response = await fetch(`/api/books/search/${search}`, {
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const data = await response.json();
    console.log(data);
    if (!response.ok) {
      throw new Error('invalid Book API response, check network tab!');
    }
    const books = [];
    for (let i = 0; i < data.items.length; i++) {
      const book = data.items[i];
      const bookData: BookData = {
        id: i,
        title: book.volumeInfo.title,
        authors: book.volumeInfo.authors,
        description: book.volumeInfo.description,
        thumbnail: book.volumeInfo.imageLinks?.thumbnail,
        pageCount: book.volumeInfo.pageCount,
        publishedDate: book.volumeInfo.publishedDate,
        maturityRating: book.volumeInfo.averageRating,
      };
      books.push(bookData);
    }


    return books;
  } catch (err) {
    console.log('Error from data retrieval:', err);
    return [];
  }
}


export { retrieveBook, retrieveBooks, createBook, updateBooks, deleteBook, searchBooks };
