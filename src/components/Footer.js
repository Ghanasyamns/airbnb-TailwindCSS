import "./footer.css";
function Footer() {
  return (
    <div className="">
      <div className="bg-gray-100 py-12 pl-[130px] grid grid-cols-1 sm:grid-cols-2  justify-center lg:grid-cols-4 ">
        <div className=" singleFooter">
          <h5 className=" ">ABOUT</h5>
          <p>How Airbnb works</p>
          <p>Newsroom</p>
          <p>Investors</p>
          <p>Airbnb Plus</p>
          <p>Airbnb Luxe</p>
        </div>
        <div className=" singleFooter">
          <h5>COMMUNITY</h5>
          <p>Accessibility</p>
          <p>Airbnb Associates</p>
          <p>Frontline Stays</p>
          <p>Guest Referrals</p>
          <p>Airbnb.org</p>
        </div>
        <div className=" singleFooter">
          <h5>HOST</h5>
          <p>Host your home</p>
          <p>Host an Online Experience</p>
          <p>Host an Experience</p>
          <p>Responsible hosting</p>
          <p>Resource Centre</p>
        </div>
        <div className=" singleFooter">
          <h5>SUPPORT</h5>
          <p>Our COVID-19 Response</p>
          <p>Help Centre</p>
          <p>Cancellation options</p>
          <p>Neighbourhood Support</p>
          <p>Trust & Safety</p>
        </div>
      </div>
      <div className="bg-gray-100 pb-6 flex justify-center">
        <p className="text-sm text-gray-500">
          This is a clone version of Airbnb.Only for study purpose.
        </p>
      </div>
    </div>
  );
}

export default Footer;
