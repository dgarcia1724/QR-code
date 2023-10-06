function Card() {
  return (
    <div className="w-[320px] pt-4 px-4 pb-10 bg-white rounded-lg">
      <div className="qrCode"></div>
      <section className="mt-6 text-center">
        <h1 className="mb-4 font-bold text-[22px] tracking-normal text-Darkblue">
          Improve your front-end skills by building projects
        </h1>
        <p className=" font-normal text-[15px] tracking-[.19px] text-Grayishblue">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </section>
    </div>
  );
}

export default Card;
