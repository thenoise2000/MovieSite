import styled from 'styled-components';

const Login = (props) => {
    return (
   <Container>
       <Content>
           <CTA>
               <CTALogoOne src="/images/cta-logo-one.svg" alt=""/>
               <SignUp>View all there</SignUp>
               <Description>Get Premier Access to classic movies and the Last Movies for an additional fee
            with a premier+ subscription. As of 03/26/21, the price of yoursitemovies+
            and The your moviesite Bundle will increase by $1.</Description>
            <CTALogoTwo src="/images/cta-logo-two.png" all="" />
           </CTA>
           <BgImage/>
       </Content>
   </Container>   
    );
};

const Container = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
`;

const Content = styled.div`
    margin-bottom: 10vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;    
    flex-direction: column;
    padding: 80px 40px;
    height: 100%;    
`;

const BgImage = styled.div`
    height: 100%;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("/images/background2.jpg");
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;
`;

const CTA = styled.div`    
    max-width: 650px;   
    display: flex;
    flex-direction: column;      
    width:100%;
`;

const CTALogoOne = styled.img`
    margin-bottom: 12px;
    max-width: 600px;
    min-height: 1px;
    display: block;
    width: 100%;
`;

const SignUp = styled.a `
    font-weight: bold;
    color: #f9f9f9;
    background-color: green;
    margin-bottom: 12px;
    width: 100%;
    letter-spacing: 1.5px;
    font-size: 18px;
    padding: 16.5px 0;
    border: 1px solid transparent;
    border-radius: 5px;

    &:hover {
        background-color: #0483ee;
    }`;

    const Description = styled.p`
        color: hsla(0,0%, 95.3%,1);
        font-size: 11px;
        margin: 0 0 24px;
        line-height: 1.5;
        letter-spacing: 1.5px;    
        font-family: 'Architects Daughter';  
        font-size: 24px;                                              
        color: black;
    `;

    const CTALogoTwo = styled.img`
        max-width: 600px;
        margin-bottom: 20px;
        display: inline-block;
        vertical-align: bottom;
        width: 80%;
    `;

export default Login;