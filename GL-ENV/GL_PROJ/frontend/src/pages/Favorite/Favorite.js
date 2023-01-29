  import './Favorite.css';
  import {UserNavbar, Card, Footer} from '../../components/index'
  import images from '../../assets/Images/index'
  
  function Favorite() {
    return (
      <>
        <UserNavbar />
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-[50px] m-[50px]">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
        <Footer />
      </>
    );
  }
  
export default Favorite;