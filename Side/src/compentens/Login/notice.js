import '../../assets/notice.css';
import ReactPlayer from 'react-player/lazy';
import React,{useEffect} from 'react';

const Notice = () =>{
        useEffect(()=>{
    
    },[Notice])
return(
    <div className='LoginNotice'>
          <ReactPlayer
                    className='react-player'
                    url={'https://www.youtube.com/watch?v=dH8ZH-bxKf8'}    // 플레이어 url
                    width='43.750em'         // 플레이어 크기 (가로)
                    height='25.000em'        // 플레이어 크기 (세로)
                    playing={false}        // 자동 재생 on
                    muted={false}          // 자동 재생 on
                    controls={true}       // 플레이어 컨트롤 노출 여부
                    light={false}         // 플레이어 모드
                    pip={true}            // pip 모드 설정 여부
                    poster={'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg'}   // 플레이어 초기 포스터 사진
                  
                />
    
    </div>
)
}

export default React.memo(Notice);