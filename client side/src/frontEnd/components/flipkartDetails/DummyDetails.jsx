import React from 'react';
import styled from 'styled-components'

const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #FAFAFA;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 30px;
`;

const Head = styled.h6`
    font-size: 17px;
    color: #576574;
    margin-bottom: 7px;
    margin-top: 20px;
`;

const Details = styled.span`
    color: #999494;
    font-size: 12px;
`;

const DummyDetails = () => {
  return (
    <>
        <MainDiv>
            <Head>Flipkart: The One-stop Shopping Destination</Head>
            <Details>
                E-commerce is revolutionizing the way we all shop in India. Why do you want to hop from one store to another in search of the latest phone when you can find it on the Internet in a single click? Not only mobiles. Flipkart houses everything you can possibly imagine, from trending electronics like laptops, tablets, smartphones, and mobile accessories to in-vogue fashion staples like shoes, clothing and lifestyle accessories; from modern furniture like sofa sets, dining tables, and wardrobes to appliances that make your life easy like washing machines, TVs, ACs, mixer grinder juicers and other time-saving kitchen and small appliances; from home furnishings like cushion covers, mattresses and bedsheets to toys and musical instruments, we got them all covered. You name it, and you can stay assured about finding them all here. For those of you with erratic working hours, Flipkart is your best bet. Shop in your PJs, at night or in the wee hours of the morning. This e-commerce never shuts down.
                <br/><br/>
                What's more, with our year-round shopping festivals and events, our prices are irresistible. We're sure you'll find yourself picking up more than what you had in mind. If you are wondering why you should shop from Flipkart when there are multiple options available to you, well, the below will answer your question.
            </Details>
            <Head>Flipkart Plus</Head>
            <Details>
                A world of limitless possibilities awaits you - Flipkart Plus was kickstarted as a loyalty reward programme for all its regular customers at zero subscription fee. All you need is 500 supercoins to be a part of this service. For every 100 rupees spent on Flipkart order, Plus members earns 4 supercoins & non-plus members earn 2 supercoins. Free delivery, early access during sales and shopping festivals, exchange offers and priority customer service are the top benefits to a Flipkart Plus member. In short, earn more when you shop more!
                <br/><br/>
                What 's more, you can even use the Flipkart supercoins for a number of exciting services, like:<br/>
                An annual Zomato Gold membership<br/>
                An annual Hotstar Premium membership<br/>
                6 months Gaana plus subscription<br/>
                Rupees 550 instant discount on flights on ixigo<br/>
                Check out https://www.flipkart.com/plus/all-offers for the entire list. Terms and conditions apply.<br/>
            </Details>
            <Head>No Cost EMI</Head>
            <Details>
                In an attempt to make high - end products accessible to all, our No Cost EMI plan enables you to shop with us under EMI, without shelling out any processing fee.Applicable on select mobiles, laptops, large and small appliances, furniture, electronics and watches, you can now shop without burning a hole in your pocket.If you 've been eyeing a product for a long time, chances are it may be up for a no cost EMI. Take a look ASAP! Terms and conditions apply.
            </Details>
            <Head>Mobile Exchange Offers</Head>
            <Details>
                Get an instant discount on the phone that you have been eyeing on. Exchange your old mobile for a new one after the Flipkart experts calculate the value of your old phone, provided it is in a working condition without damage to the screen. If a phone is applicable for an exchange offer, you will see the 'Buy with Exchange' option on the product description of the phone. So, be smart, always opt for an exchange wherever possible. Terms and conditions apply.
            </Details>
            <Head>Electronic Devices and Accessories</Head>
            <Details>
                When it comes to laptops, we are not far behind. Filter among dozens of super-fast operating systems, hard disk capacity, RAM, lifestyle, screen size and many other criterias for personalized results in a flash. All you students out there, confused about what laptop to get? Our Back To College Store segregates laptops purpose wise (gaming, browsing and research, project work, entertainment, design, multitasking) with recommendations from top brands and industry experts, facilitating a shopping experience that is quicker and simpler.
                <br/><br/>
                Photography lovers, you couldn't land at a better page than ours. Cutting-edge DSLR cameras, ever reliable point-and-shoot cameras, millennial favourite instant cameras or action cameras for adventure junkies: our range of cameras is as much for beginners as it is for professionals. Canon, Nikon, GoPro, Sony, and Fujifilm are some big names you'll find in our store. Photography lovers, you couldn't land at a better page than ours. Cutting-edge DSLR cameras, ever reliable point-and-shoot cameras, millennial favourite instant cameras or action cameras for adventure junkies: our range of cameras is as much for beginners as it is for professionals. Canon, Nikon, GoPro, Sony, and Fujifilm are some big names you'll find in our store.
                <br/><br/>
                Turn your home into a theatre with a stunning surround sound system. Choose from our elaborate range of Sony home theatres, JBL soundbars and Philips tower speakers for an experience to remember.
                <br/><br/>
                How about jazzing up your phone with our quirky designer cases and covers? Our wide-ranging mobile accessories starting from headphones, power banks, memory cards, mobile chargers, to selfie sticks can prove to be ideal travel companions for you and your phone; never again worry about running out of charge or memory on your next vacation.
            </Details>
            <Head>Lifestyle</Head>
            <Details>
                Flipkart, 'India ka Fashion Capital', is your one-stop fashion destination for anything and everything you need to look good. Our exhaustive range of Western and Indian wear, summer and winter clothing, formal and casual footwear, bridal and artificial jewellery, long-lasting make-up, grooming tools and accessories are sure to sweep you off your feet. Shop from crowd favourites like Vero Moda, Forever 21, Only, Arrow, Woodland, Nike, Puma, Revlon, Mac, and Sephora among dozens of other top-of-the-ladder names. From summer staple maxi dresses, no-nonsense cigarette pants, traditional Bandhani kurtis to street-smart biker jackets, you can rely on us for a wardrobe that is up to date. Explore our in-house brands like Metronaut, Anmi, and Denizen, to name a few, for carefully curated designs that are the talk of the town. Get ready to be spoiled for choice.Festivals, office get-togethers, weddings, brunches, or nightwear - Flipkart will have your back each time.
            </Details>
            <Head>Baby and Kids</Head>
            <Details>
                Your kids deserve only the best. From bodysuits, booties, diapers to strollers, if you're an expecting mother or a new mother, you will find everything you need to set sail on a smooth parenting journey with the help of our baby care collection. When it comes to safety, hygiene and comfort, you can rely on us without a second thought. Huggies, Pampers, MamyPoko, and Johnson & Johnson: we host only the most-trusted names in the business for your baby.
            </Details>
            <Head>Books, Sports and Games</Head>
            <Details>
                Work hard and no play? We don't believe in that. Get access to best-selling fiction and non-fiction books by your favourite authors, thrilling English and Indian blockbusters, most-wanted gaming consoles, and a tempting range of fitness and sports gadgets and equipment bound to inspire you to get moving.
            </Details>
            <Head>Grocery/Supermart</Head>
            <Details>
                Launching into the grocery vertical, Flipkart introduces Supermart that is out to bring everyday essentials close to you. From pulses, spices, dairy, personal and sanitary care, breakfast essentials, health drinks, spreads, ready to cook, grooming to cleaning agents, we are happy to present everything you need to run a house. Now buy Grocery products for as low as 1 Rupee only - our 1 Rupee Store presents new products every day for a nominal price of 1 Rupee only. Terms and conditions apply.
            </Details>
        </MainDiv>
    </>
  );
}

export default DummyDetails;
