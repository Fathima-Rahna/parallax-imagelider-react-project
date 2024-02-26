import React from 'react'

const Footer = () => {
  return (
    <div className='mt-5' style={{height:'200px'}}>
        <h3>follow us: <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-youtube"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-linkedin"></i>
        </h3>
        <div className='mt-5 p-5 '>
        This product is based upon work supported by NASA under award numbers NNX16AC65A and NNX15AB26G and contracts NAS5-26555 and NAS5-03127.Any opinions, findings, and conclusions or recommendations expressed in this material<br></br>
          <span className='' style={{textAlign:'center',paddingLeft:'500px'}}>are those of the author(s) and do not necessarily reflect the views of the National Aeronautics and Space Administration.</span>
        </div>
        
                    
    </div>

  )
}

export default Footer