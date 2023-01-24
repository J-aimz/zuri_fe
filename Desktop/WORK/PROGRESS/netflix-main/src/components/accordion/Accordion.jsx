import { useRef, useState } from 'react'
import css from './Accordion.module.scss'
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';

import content from '../../utils/FAQs'


function Accordion() {
    const [selected, setSelected] = useState(null)

    function displayInfo(id) {
        
        if(selected != id){
            setSelected(id)
        }else if(selected === id) {
            setSelected(null)
        }
    }

  return (
    
    content.map((el, ind) => (
        <div key={ind} className={css.con} onClick={() =>displayInfo(ind)}>
            <div className={css.btn}>
                <span>{el.btnText}</span>
                {
                    selected ?   <CloseIcon /> : <AddIcon />
                }
            </div>
    
            <div className={`${css.body} ${selected === ind ? css.open : css.close}`} >
                <p>{el.paragraphOne}</p>
                <p>{el.paragraphTwo}</p>
            </div>
    
        </div>

    ))
    
  )
}

export default Accordion