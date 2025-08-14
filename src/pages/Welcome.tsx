import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import { Chart } from '@antv/g2';
import { Card, Col, Progress, Row, Table } from 'antd';
import * as echarts from 'echarts';
import React, { useEffect, useState } from 'react';
import styles from './styles.less';

const twoColors = {
  '0%': '#108ee9',
  '100%': '#87d068',
};

const columns = [
  {
    title: '设备名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '安装位置',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '加速度(g)',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '速度(mm/s)',
    key: 'tags',
    dataIndex: 'tags',
  },
  {
    title: '振幅(um)',
    key: 'action',
    dataIndex: 'action',
  },
  {
    title: '其他(℃)',
    key: 'action2',
    dataIndex: 'action2',
  },
];

const data = [
  {
    key: '1',
    name: '泥浆泵',
    age: '电机左侧轴承',
    address: '0.125',
    tags: '0.1254',
    action: '0.1254',
    action2: '0.1254',
  },
  {
    key: '12',
    name: '泥浆泵',
    age: '电机右侧轴承',
    address: '0.125',
    tags: '0.1254',
    action: '0.1254',
    action2: '0.1254',
  },
  {
    key: '123',
    name: '泥浆泵',
    age: '输入轴非驱动端轴承',
    address: '0.125',
    tags: '0.1254',
    action: '0.1254',
    action2: '0.1254',
  },
  {
    key: '124',
    name: '泥浆泵',
    age: '中间轴非驱动端轴承',
    address: '0.125',
    tags: '0.1254',
    action: '0.1254',
    action2: '0.1254',
  },
  {
    key: '1245',
    name: '泥浆泵',
    age: '输出轴驱动端轴承',
    address: '0.125',
    tags: '0.1254',
    action: '0.1254',
    action2: '0.1254',
  },
];

const Welcome: React.FC = () => {
  const [uData,setData]= useState(data)
  useEffect(()=>{
    setInterval(()=>{
      data.forEach(item=>{
        item.address = Math.random().toFixed(3)
        item.tags = Math.random().toFixed(3)
        item.action = Math.random().toFixed(3)
        item.action2 = Math.random().toFixed(3)
      })

      setData([...data])
    },500)
  },[])

  useEffect(() => {
    var chartDom = document.getElementById('container');
    var myChart = echarts.init(chartDom);

    function makeRandomData() {
      return [
        {
          value: Math.random(),
          name: '绞车',
        },
        {
          value: Math.random(),
          name: '转盘',
        },
        {
          value: Math.random(),
          name: '泥浆泵',
        },
      ];
    }

    const options = {
      tooltip: {
        trigger: 'item',
      },
        legend: {
    bottom: '-1%',
    left: 'center'
  },
      grid: { left: 0, right: 0 },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['50%', '70%'],
          data: makeRandomData(),
        },
      ],
    };
    options && myChart.setOption(options);

    setInterval(() => {
      myChart.setOption({
        series: {
          data: makeRandomData(),
        },
      });
    }, 2000);
  }, []);

  useEffect(() => {
    var chartDom = document.getElementById('container2');
    var myChart = echarts.init(chartDom);

    function makeRandomData() {
      return [
        {
          value: Math.random(),
          name: '绞车',
        },
        {
          value: Math.random(),
          name: '转盘',
        },
        {
          value: Math.random(),
          name: '泥浆泵',
        },
      ];
    }

    const options = {
      tooltip: {
        trigger: 'item',
      },
              legend: {
    bottom: '-1%',
    left: 'center'
  },
      grid: { left: 0, right: 0 },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['50%', '70%'],
          data: makeRandomData(),
        },
      ],
    };
    options && myChart.setOption(options);

    setInterval(() => {
      myChart.setOption({
        series: {
          data: makeRandomData(),
        },
      });
    }, 2000);
  }, []);

  useEffect(() => {
    const data = [
      { name: '转盘', 时间: '2025-03-12', 报警数: 18 },
      { name: '转盘', 时间: '2025-03-14', 报警数: 28 },
      { name: '转盘', 时间: '2025-03-15', 报警数: 39 },
      { name: '转盘', 时间: '2025-03-16', 报警数: 81 },
      { name: '转盘', 时间: '2025-03-17', 报警数: 47 },
      { name: '转盘', 时间: '2025-03-18', 报警数: 20 },
      { name: '转盘', 时间: '2025-03-19', 报警数: 24 },

      { name: '绞车', 时间: '2025-03-12', 报警数: 11 },
      { name: '绞车', 时间: '2025-03-14', 报警数: 3 },
      { name: '绞车', 时间: '2025-03-15', 报警数: 12 },
      { name: '绞车', 时间: '2025-03-16', 报警数: 2 },
      { name: '绞车', 时间: '2025-03-17', 报警数: 56 },
      { name: '绞车', 时间: '2025-03-18', 报警数: 10 },
      { name: '绞车', 时间: '2025-03-19', 报警数: 33 },

      { name: '泥浆泵', 时间: '2025-03-12', 报警数: 8 },
      { name: '泥浆泵', 时间: '2025-03-14', 报警数: 24 },
      { name: '泥浆泵', 时间: '2025-03-15', 报警数: 19 },
      { name: '泥浆泵', 时间: '2025-03-16', 报警数: 50 },
      { name: '泥浆泵', 时间: '2025-03-17', 报警数: 18 },
      { name: '泥浆泵', 时间: '2025-03-18', 报警数: 6 },
      { name: '泥浆泵', 时间: '2025-03-19', 报警数: 12 },
    ];

    const chart = new Chart({
      container: 'container3',
      autoFit: true,
      height: 300,
    });

    chart
      .interval()
      .data(data)
      .encode('x', '时间')
      .encode('y', '报警数')
      .encode('color', 'name')
      .transform({ type: 'dodgeX' })
      .interaction('elementHighlight', { background: true });

    chart.render();

    setInterval(() => {
      data.forEach((item) => {
        item.报警数 = Math.fround(Math.random() * 100);
      });
      chart.changeData([...data]);
    }, 2000);
  }, []);

  useEffect(() => {
    const data = [
      { name: '转盘', 时间: '2025-03-12', 报警处理数: 12 },
      { name: '转盘', 时间: '2025-03-14', 报警处理数: 16 },
      { name: '转盘', 时间: '2025-03-15', 报警处理数: 29 },
      { name: '转盘', 时间: '2025-03-16', 报警处理数: 80 },
      { name: '转盘', 时间: '2025-03-17', 报警处理数: 45 },
      { name: '转盘', 时间: '2025-03-18', 报警处理数: 18 },
      { name: '转盘', 时间: '2025-03-19', 报警处理数: 19 },

      { name: '绞车', 时间: '2025-03-12', 报警处理数: 10 },
      { name: '绞车', 时间: '2025-03-14', 报警处理数: 3 },
      { name: '绞车', 时间: '2025-03-15', 报警处理数: 11 },
      { name: '绞车', 时间: '2025-03-16', 报警处理数: 1 },
      { name: '绞车', 时间: '2025-03-17', 报警处理数: 50 },
      { name: '绞车', 时间: '2025-03-18', 报警处理数: 8 },
      { name: '绞车', 时间: '2025-03-19', 报警处理数: 32 },

      { name: '泥浆泵', 时间: '2025-03-12', 报警处理数: 6 },
      { name: '泥浆泵', 时间: '2025-03-14', 报警处理数: 20 },
      { name: '泥浆泵', 时间: '2025-03-15', 报警处理数: 18 },
      { name: '泥浆泵', 时间: '2025-03-16', 报警处理数: 40 },
      { name: '泥浆泵', 时间: '2025-03-17', 报警处理数: 16 },
      { name: '泥浆泵', 时间: '2025-03-18', 报警处理数: 6 },
      { name: '泥浆泵', 时间: '2025-03-19', 报警处理数: 12 },
    ];

    const chart = new Chart({
      container: 'container4',
      autoFit: true,
      height: 300,
    });

    chart
      .interval()
      .data(data)
      .encode('x', '时间')
      .encode('y', '报警处理数')
      .encode('color', 'name')
      .transform({ type: 'dodgeX' })
      .interaction('elementHighlight', { background: true });

    chart.render();

    setInterval(() => {
      data.forEach((item) => {
        item.报警处理数 = Math.fround(Math.random() * 100);
      });
      chart.changeData([...data]);
    }, 2000);
  }, []);

  useEffect(() => {
    const data = [
      { year: '1991', value: 15468 },
      { year: '1992', value: 16100 },
      { year: '1993', value: 15900 },
      { year: '1994', value: 17409 },
      { year: '1995', value: 17000 },
      { year: '1996', value: 31056 },
      { year: '1997', value: 31982 },
      { year: '1998', value: 32040 },
      { year: '1999', value: 33233 },
    ];
    const chart = new Chart({
      container: 'container6',
      autoFit: true,
      height: 76,
    });

    chart.data(data);

    chart
      .area()
      .encode('x', (d) => d.year)
      .encode('y', 'value')
      .encode('shape', 'area') // 'area', 'smooth', 'hvh', 'vh', 'hv'
      .style('opacity', 0.2)
      .axis('y', { labelFormatter: '~s', title: false });

    chart.line().encode('x', 'year').encode('y', 'value').axis({ x: false, y: false });

    chart.render();
  }, []);

  return (
    <div>
      <Row>
        <Col md={6}>
          <Card className={styles.card}>
            <div className="card-top">
              <div>
                <span className="top-text">总报警事件</span>
              </div>
            </div>
            <div className="num">1,818</div>
            <div className="box">
              <div>
                周同比 12% <CaretUpOutlined style={{ color: '#f5222d' }} />
              </div>
              <div style={{ paddingLeft: 24 }}>
                日同比：5% <CaretDownOutlined style={{ color: '#52c41a' }} />
              </div>
            </div>
            <div className="footer">
              <div>日报警数 12</div>
            </div>
          </Card>
        </Col>
        <Col md={6}>
          <Card className={styles.card} style={{ margin: '0 12px' }}>
            <div className="card-top">
              <div>
                <span className="top-text">报警处理总数</span>
              </div>
            </div>
            <div>
              <div className="container6" id="container6"></div>
            </div>
            <div className="footer">
              <div>环期：1,78</div>
              <div style={{ paddingLeft: 24 }}>环比：80.12%</div>
            </div>
          </Card>
        </Col>
        <Col md={6}>
          <Card className={styles.card} style={{ marginRight: 12 }}>
            <div className="card-top">
              <div>
                <span className="top-text">当前未处理报警数</span>
              </div>
            </div>
            <div className="num">18</div>
            <div className="box">
              <div>
                周同比 6% <CaretUpOutlined style={{ color: '#f5222d' }} />
              </div>
              <div style={{ paddingLeft: 24 }}>
                日同比：2% <CaretDownOutlined style={{ color: '#52c41a' }} />
              </div>
            </div>
            <div className="footer">
              <div>今日未处理数 6</div>
            </div>
          </Card>
        </Col>
        <Col md={6}>
          <Card className={styles.card}>
            <div className="card-top">
              <div>
                <span className="top-text">在线设备</span>
              </div>
            </div>
            <div className="num">90%</div>
            <Progress style={{ marginTop: 12 }} percent={90} strokeColor={twoColors} />
            <div className="footer">
              <div>在线：18</div>
              <div style={{ paddingLeft: 24 }}>离线：2</div>
            </div>
          </Card>
        </Col>
      </Row>

      <Row style={{ marginTop: 12 }}>
        <Col md={6}>
          <Card title="报警类型" className={styles.card} style={{ marginRight: 12 }}>
            <div className="container" id="container" style={{ height: 220 }}></div>
          </Card>
        </Col>
        <Col md={6}>
          <Card title="异常时间占比" className={styles.card} style={{ marginRight: 12 }}>
            <div className="container2" id="container2" style={{ height: 220 }}></div>
          </Card>
        </Col>
        <Col md={12}>
          <Card title="实时监控" className={styles.card}>
            <Table
              size="small"
              columns={columns}
              dataSource={uData}
              pagination={{ defaultPageSize: 4 }}
            />
          </Card>
        </Col>
      </Row>
      <Row style={{ marginTop: 12 }}>
        <Col md={12}>
          <Card title="近七天报警数统计" className={styles.card} style={{ marginRight: 12 }}>
            <div className="container3" id="container3"></div>
          </Card>
        </Col>
        <Col md={12}>
          <Card title="近七天报警处理数统计" className={styles.card}>
            <div className="container4" id="container4"></div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Welcome;
