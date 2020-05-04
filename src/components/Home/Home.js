import React from 'react';
import styles from './Home.module.css';

class Home extends React.Component {

  render(){
    return (
        <div className={styles.home}>
          <p>
            A book is a set of printed sheets of paper held together between two covers. The sheets of paper are usually covered with a text, language and illustrations that is the main point of a printed book.
          </p>

          <p>
            A writer of a book is called an author. Someone who draws pictures in a book is called an illustrator. Books can have more than one author or illustrator.
          
            A book can also be a text in a larger collection of texts. That way a book is perhaps written by one author, or it only treats one subject area. Books in this sense can often be understood without knowing the whole collection. Examples are the Bible, the Illiad or the Odyssey – all of them consist of a number of books in this sense of the word. Encyclopedias often have separate articles written by different people, and published as separate volumes. Each volume is a book.
          </p>

          <p>
            Hardcover books have hard covers made of cardboard covered in cloth or leather and are usually sewn together. Paperback books have covers of stiff paper and are usually glued together. The words in books can be read aloud and recorded on tapes or compact discs. These are called "audiobooks".
          
            Books can be borrowed from a library or bought from a bookstore. People can make their own books and fill them with family photos, drawings, or their own writing. Some books are empty inside, like a diary, address book, or photo album. Most of the time, the word "book" means that the pages inside have words printed or written on them.
          </p>

          <p>
            Some books are written just for children, or for entertainment, while other books are for studying something in school such as math or history. Many books have photographs or drawings.
          </p>
        </div>
    );
  }  
}

export default Home;
