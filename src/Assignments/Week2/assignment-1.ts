/* 
Library Management System

Description:

A simple system to manage books and members of a library using OOP principles. */



class Book {
  constructor(
    public id: number,
    public title: string,
    public author: string,
    public isAvailable: boolean = true
  ) {}
}

class Member {
  constructor(public id: number, public name: string) {}
}

class Library {
  private books: Book[] = [];
  private members: Member[] = [];

  addBook(book: Book): void {
    this.books.push(book);
  }

  addMember(member: Member): void {
    this.members.push(member);
  }

  lendBook(bookId: number, memberId: number, memberName: string): void {
    const book = this.books.find(b => b.id === bookId);
    if (book && book.isAvailable) {
      book.isAvailable = false;
      console.log(`Book "${book.title}" lent to member ${memberId}, ${memberName}`);
    } else {
      console.log(`Book not available or does not exist.`);
    }
  }

  returnBook(bookId: number): void {
    const book = this.books.find(b => b.id === bookId);
    if (book && !book.isAvailable) {
      book.isAvailable = true;
      console.log(`Book "${book.title}" returned.`);
    } else {
      console.log(`Book was not lent or does not exist.`);
    }
  }

  listBooks(): void {
    this.books.forEach(book =>
      console.log(`${book.id}. ${book.title} by ${book.author} - ${book.isAvailable ? "Available" : "Lent"}`)
    );
  }
}

const lib = new Library();
lib.addBook(new Book(1, "1984", "George Orwell"));
lib.addBook(new Book(2, "To Kill a Mockingbird", "Harper Lee"));
lib.addMember(new Member(1, "Alice"));
lib.lendBook(1, 1, "Alice");
lib.listBooks();
lib.returnBook(1);
lib.listBooks();

