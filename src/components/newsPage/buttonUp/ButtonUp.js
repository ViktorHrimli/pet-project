import {Button} from 'components/newsPage/buttonUp/ButtonUp.styled'

export const ButtonUp = ({setShowButton}) => {

    const handlClick = () => {
        window.scroll({
            top: 0,
            behavior: "smooth"
        });
}

    
    return (
        <div style={{position: 'absolute'}}>
            <Button type="button" onClick={handlClick}>UP</Button>
        </div>
        
    )
}

