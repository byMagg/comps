import Button from '../components/Button';
import { GoBell, GoDownload, GoDatabase } from 'react-icons/go'

function ButtonPage() {
    const handleClick = () => { };

    return (
        <div>
            <div>
                <Button secondary outline rounded onClick={handleClick}>
                    <GoBell />
                    Click me!!
                </Button>
            </div>
            <div>
                <Button danger outline>
                    <GoDownload />
                    Buy Now!
                </Button>
            </div>
            <div>
                <Button warning>
                    <GoDatabase />
                    See Deal!
                </Button>
            </div>
            <div>
                <Button secondary outline>
                    Hide Ads!
                </Button>
            </div>
            <div>
                <Button primary rounded>
                    Something!
                </Button>
            </div>
        </div>
    );
}

export default ButtonPage;
