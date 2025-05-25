const Footer = () => {
  return (
    <div className="mt-8 text-center">
      <p className="text-sm text-gray-500">
        &copy; {new Date().getFullYear()} QR Code Generator by <a href="https://github.com/PasinduOG" target="_blank"><b>Pasindu OG</b></a>. Create beautiful QR codes quickly and easily.
      </p>
      <p className="text-sm text-gray-500">
        All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
