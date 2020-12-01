
import db from '../connection/query';
import {createLevel} from '../queries/Level';

for(let i=1;i<=6;i++){
    db.query(createLevel,[i,`P ${i}`]).then((response)=>{
     console.log(response.rows[0])
    }).catch((err)=>{
      console.log(err)
    })
}
