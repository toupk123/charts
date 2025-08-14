import { PageContainer } from '@ant-design/pro-components';
import { useEffect } from 'react';
import JSMpeg from 'jsmpeg'
const Settings = () => {
  useEffect(() => {
    var canvas = document.getElementById('video-canvas');
    var url = 'ws://192.168.0.12:7681';
    var player = new JSMpeg(url, { canvas: canvas, loop: true, autoplay: true });
    player.play();
  }, []);

  return (
    <PageContainer>
      <canvas id="video-canvas"></canvas>
    </PageContainer>
  );
};

export default Settings;
