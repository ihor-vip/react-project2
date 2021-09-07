import "./Header.css";


 const Header = () => {
    return (
        <header className={'header'}>
            <div className={'page_title'}>
                <h1><i>Satisfaction_zone.co.uk</i></h1>
            </div>
            <div className={'avatar'}>
                    <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKSJrRnCn95fLC4rFP6TeivprCuvKBP2q_2Q&usqp=CAU'} className={'header_img'} alt={'avatar'}/>
                    <h6> Welcome, John</h6>
            </div>
        </header>



    );
};

export default Header;