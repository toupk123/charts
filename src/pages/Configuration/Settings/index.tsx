import { PageContainer } from '@ant-design/pro-components';
import {
  Engine3D,
  Scene3D,
  Object3D,
  Camera3D,
  View3D,
  LitMaterial,
  BoxGeometry,
  MeshRenderer,
  DirectLight,
  HoverCameraController,
  AtmosphericComponent
} from '@orillusion/core';
import { useEffect } from 'react';

const Settings = () => {
  useEffect(() => {
    let canvas = document.getElementById('canvas');
    Engine3D.init({
      canvasConfig: { canvas },
    }).then(()=>{
      let scene3D = new Scene3D();
      let sky = scene3D.addComponent(AtmosphericComponent);

      let cameraObj = new Object3D();
      let camera = cameraObj.addComponent(Camera3D);
      // 根据窗口大小设置摄像机视角
      camera.perspective(60, window.innerWidth / window.innerHeight, 1, 5000.0);
      // 设置相机控制器
      let controller = camera.object3D.addComponent(HoverCameraController);
      controller.setCamera(0, 0, 15);
      // 添加相机节点
      scene3D.addChild(cameraObj);


      let light = new Object3D();
      // 添加直接光组件
      let component = light.addComponent(DirectLight);
      // 调整光照参数
      light.rotationX = 45;
      light.rotationY = 30;
      component.intensity = 2;
      // 添加光照对象
      scene3D.addChild(light);


      const obj = new Object3D();
      // 为对象添 MeshRenderer
      let mr = obj.addComponent(MeshRenderer);
      // 设置几何体
      mr.geometry = new BoxGeometry(5, 5, 5);
      // 设置材质
      mr.material = new LitMaterial();
      scene3D.addChild(obj);


      let view = new View3D();
      // 指定渲染的场景
      view.scene = scene3D;
      // 指定使用的相机
      view.camera = camera;
      // 开始渲染
      Engine3D.startRenderView(view);
    })
  }, []);

  return <PageContainer><canvas id="canvas" style={{width:800,height:500}} /></PageContainer>;
};

export default Settings;
