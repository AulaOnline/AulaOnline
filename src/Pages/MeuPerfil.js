import React from 'react';
import NavbarWidgets from '../Layout/components/NavBarWidgets';
import VideoCard from '../Layout/components/VideoCards/VideoCard';



function MeuPerfil() {
  return (
    <div className='main'>
    <NavbarWidgets name='Aula Online' cor= '#017BF7'/>

     <div className="content">
        {/*{videoData.map((video, index) => (
          <VideoCard key={index} {...video} />
        ))}*/}
        <VideoCard/>
      </div>
    </div>

  );
}

export default MeuPerfil;
