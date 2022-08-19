import Container from "../Container";

import Image from "next/image";

const Footer = (props) => {
  return (
    <Container className='mt-10 border-t border-gray-100 dark:border-gray-800'>
      <div className='text-sm text-center'>
        Copyright © {new Date().getFullYear()} {props?.copyright}. All rights
        reserved.
      </div>
      <div className='mt-1 text-sm text-center text-gray-500 dark:text-gray-600'>
        Made by{" "}
        {/*  // ** 🙏  Can I ask you a favor? 🙏 **
            // Please do not remove the below link.
           // It helps us to grow & continue our work. Thank you.
          // OR contact hello@web3templates.com for commercial license.  */}
        <a
          href='https://www.web3templates.com/?ref=stablo-template'
          rel='noopener noreferrer'
          target='_blank'
        >
          Web3Templates
        </a>
        {/* Do not remove above link */}
      </div>
      <div className='flex items-center justify-between mt-2'>
        <div className='mt-5'>
          <a
            href='https://vercel.com/?utm_source=web3templates&utm_campaign=oss'
            target='_blank'
            rel='noopener noreferrer'
            className='relative block w-44'
          ></a>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
