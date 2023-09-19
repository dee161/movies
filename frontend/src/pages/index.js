import React from 'react'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Line from '@/components/Line';

// import Gallery from '@/components/Gallery';
import CardComponent from '@/components/CardComponent';
// import Login from '@/components/Login';
function index() {
  return (
    <div>  
      <Navbar/><br></br>
      <Line/><br></br>
      <CardComponent/>
        <Footer/>
    </div>
  );
}
// const [dropdownStauts, setDropdownStatus] = useState(false)

export default index;
