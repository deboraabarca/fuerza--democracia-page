import eimg1 from '../images/event/img-1.jpg'
import eimg2 from '../images/event/img-2.jpg'
import eimg3 from '../images/event/img-3.jpg'

import eSimg1 from '../images/event/single/img-1.jpg'
import eSimg2 from '../images/event/single/img-2.jpg'
import eSimg3 from '../images/event/single/img-3.jpg'



const Events = [
    {
       Id:'1',
       eImg:eimg1,
       eSimg:eSimg1,
       thumb:'Conference',   
       title:'Gran Marcha por la\nDemocracia',  
       slug:'Support-for-Womans',
       date:'1 Marzo, 2025',
       time:'15:00 - 19:00',
       location:'Plaza San Martín, Lima',
       progress:'90',
       raised:'2000.00',
       goal:'3000.00',
    },
    {
       Id:'2',
       eImg:eimg2,
       eSimg:eSimg2,
       thumb:'Entertainment',    
       title:'Foro Nacional:\nTransparencia y Buen Gobierno', 
       slug:'Business-Earning',
       date:'5 Julio, 2025',
       time:'10:00 - 15:00',
       location:'Auditorio Municipal, Arequipa',
       progress:'80',
       raised:'3000.00',
       goal:'4000.00',
    },
    {
      Id:'3',
      eImg:eimg3,
      eSimg:eSimg3,
      thumb:'Conference',   
      title:'Encuentro Juvenil por el\nFuturo del Perú',  
      slug:'Political-Commitment',
      date:'20 abril, 2025',
      time:'13:00 - 16:00',
      location:'Universidad Nacional de Trujillo',
      progress:'95',
      raised:'4000.00',
      goal:'5000.00',
   }
    
]

export default Events;