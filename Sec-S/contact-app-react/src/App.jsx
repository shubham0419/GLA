import "./App.css";
import User from "./assets/user.svg";
import Contact from "./components/Contact";
import Count from "./components/Count";
import Navbar from "./components/Navbar";

const contacts = [
  { id: 1, name: "John Doe", phone: "123-456-456", gender: "Male" },
  { id: 2, name: "Jane Smith", phone: "234-567-890", gender: "Female" },
  { id: 3, name: "Alice Johnson", phone: "345-678-123", gender: "Female" },
  { id: 4, name: "Bob Brown", phone: "456-789-234", gender: "Male" },
  { id: 5, name: "Charlie Davis", phone: "567-890-345", gender: "Male" },
  { id: 6, name: "Eve Miller", phone: "678-901-456", gender: "Female" },
  { id: 7, name: "Frank Wilson", phone: "789-012-567", gender: "Male" },
  { id: 8, name: "Grace Moore", phone: "890-123-678", gender: "Female" },
  { id: 9, name: "Hank Taylor", phone: "901-234-789", gender: "Male" },
  { id: 10, name: "Ivy White", phone: "012-345-890", gender: "Female" },
  { id: 11, name: "Jack Harris", phone: "123-456-901", gender: "Male" },
  { id: 12, name: "Kathy Clark", phone: "234-567-012", gender: "Female" },
  { id: 13, name: "Liam Lewis", phone: "345-678-123", gender: "Male" },
  { id: 14, name: "Mia Walker", phone: "456-789-234", gender: "Female" },
  { id: 15, name: "Noah Hall", phone: "567-890-345", gender: "Male" },
  { id: 16, name: "Olivia Allen", phone: "678-901-456", gender: "Female" },
  { id: 17, name: "Paul Young", phone: "789-012-567", gender: "Male" },
  { id: 18, name: "Quinn Adams", phone: "890-123-678", gender: "Non-Binary" },
  { id: 19, name: "Ruby King", phone: "901-234-789", gender: "Female" },
  { id: 20, name: "Sam Wright", phone: "012-345-890", gender: "Male" },
  { id: 21, name: "Tina Scott", phone: "123-456-123", gender: "Female" },
];

const getName = (id)=>{
  return contacts[id-1].name;
}

function App() {
  return (
    <div>
      <Navbar />
      {/* {contacts.map((contact)=>(<div></div>))} */}
      <div className="flex flex-wrap w-full pt-20 p-5 justify-center gap-4 scrollbar-hide">
        {/* {contacts.map((contact) => {
          return <Contact singleContact={contact} />;
        })} */}
        <Count/>
      </div>
    </div>
  );
}

export default App;
