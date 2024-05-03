import React from 'react';
import Navigation from '../components/Navigation';
import Slider from '../components/Slider';
import './Home.css';
import Cloud from '../components/Cloud';
import Start from '../components/Start';
import Rates from '../components/Rates';
import PlayForBrowser from '../components/PlayForBrowser';
import Maps from '../components/Maps';
import Footers from '../components/Footers';


let image: string[] = [
    "https://s3-alpha-sig.figma.com/img/11f2/4def/e7789c301a676f7fcd7b4d64da5d42fe?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CUKg67ENuOj~ceiCQDZKoVrQTo5T7MNXL6sjDlk7l87elEOh92-VWmqAFJwFfTUYuiVWI1HdadW3FE13T6P6CrmHW58p-d9kNR~aPSUWT~qHc30ZaZ-Zx5HQ6QU3cEw9eVSMf-mYbymRf9EhGqBqqSTtb6Gz8DxvIMFN4ELw-n5qzODwjv6BoMifPFotPyur6W-Hu~LYQ2nZXoA~6zGfo8Ff9xA-6OcPuaX3382PD-69I-FkmKxZJFsrPNyrxWh-ITSKLJhkjvQSkERAbgBHXG0nnuxjZzICYg55OOokmp70Dhf1N4cv6u8gFOLIIho5ovUa75EN0behpeYnGPFlaA__",
    "https://s3-alpha-sig.figma.com/img/eb6e/b4c7/f10007dc63183199b7c95336a437cf61?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a0271jZEYXPvC3KP3zDQeZlZmliEagesR8~rMUDAq3ud0vxuJCnn~JprJUwdDs5b7mZ3E0IFIpY0p862XsFwUNim6nouyy8XZuHudf~daXIAczD1ImA9TVAFpxlRbU58P~EpsQOJ1fh-GCRQs2tQut32J00n21RFcwd0a3k7icX058MupS2aeh0rL2gM1nqk5PpvEtre0vSf9cIsq~Sjd84FCINEt-DzCXc6CW5tyvaqnJVKZSuL19tkt2dgOCsRH0I608wq3ZKFfczCgxkj-0RFd2tHDVpPdeSOXDrtMUYuYhlZEU1935~-DjgiiCH-X5g8o9ftvjdXi3EFZN2MLg__",
    "https://s3-alpha-sig.figma.com/img/ca35/5cec/affc23bd0471a3edf158c994ec7d9234?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dM~irFe0NxX-pjBlxlR7Lrg8IQvx~zShWCAnuqzLce6gpb550rTWa2UYD2hbL00aQ2MFtQQe~5JAX5obGg5CigVJPgyLQEeRNE2dQ94OctkjCy89hAmt0TfS7k0Eld6Tbh8zVo9pVCz~prmpm3~cHeMX15KB2lMbqhDNgsVrDhrskmldyCKeyYmWXDOvaWUQpgrAGv1Z8wyRyRInuxg5l5SGIFDcatUXoxBR78pU49Mqnh6LweRoZcbmTmWK96yeRpVPmUH2g03rTZvCcOGFvBrmRwevtWyLWmefsJ3ZiclTasZhlrqQAzihmXshtQTOVTIu4XHrS0GpJUAZ40WJ4Q__",
    "https://s3-alpha-sig.figma.com/img/68ce/f2a0/15fa5a3cf21491df1f3aeec688889df5?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hH7heNpKgMc1aPQ2BwcR6v4jkcZFUar9Uz7QIrCp2SYp7t~MRtCYErsYKwLkSERXr5LPL6~mVkBP63UwqsXXn7KP154pJ8WzOmF0NWbNxkEt1n7~8U3aF9OH1R2lNdGDlQngBhe5hCeL0g8GDUnvJ20mKUWwScHt-bJn-Z2WgjdnGWxWcol2zLF6s~gfm3fhLh4v8-U93Ri-TvnZgt~q8chzsey~y8OpWUNe0m3aEFM0s-OvPlVF2P2wRz00k6vHEJ6wrYFLUJsgz3efefcbSvx97Hv68YcbyTDBb9Gwtn1C3486y0DoTgQYGiqBj~YNESshXT7zd2DYphKbJY6UmQ__"
];

const Home: React.FC = () => {
    return (
        <div style={{ overflow: 'hidden' }}>
            <Navigation activeLink={window.location.pathname} setActiveLink={(link) => link === '/' && window.scrollTo(0, 0)}></Navigation>
            <div className='body'>
                <Slider items={image}></Slider>
                <div className='body__content'>
                    <Cloud></Cloud>
                    <Start></Start>
                    <Rates></Rates>
                </div>
                <PlayForBrowser></PlayForBrowser>
                <Maps></Maps>
            </div>
            <Footers></Footers>
        </div>
    );
}

export default Home;
