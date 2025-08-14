import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import { Chart } from '@antv/g2';
import { Card, Col, Progress, Row, Table } from 'antd';
import React, { useEffect } from 'react';
import styles from './styles.less';

const twoColors = {
  '0%': '#108ee9',
  '100%': '#87d068',
};

const columns = [
  {
    title: 'Equipment Name',
    dataIndex: 'name',
    key: 'name',
    minWidth:130,
  },
  {
    title: 'Installation Position',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Acceleration(g)',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Speed(mm/s)',
    key: 'tags',
    dataIndex: 'tags',
  },
  {
    title: 'Amplitude(um)',
    key: 'action',
    dataIndex: 'action',
  },
  {
    title: 'Other(℃)',
    key: 'action2',
    dataIndex: 'action2',
  },
];

const data = [
  {
    key: '1',
    name: 'Slurry Pump',
    age: 'Motor Left Side Bearing',
    address: '0.125',
    tags: '0.1254',
    action: '0.1254',
    action2: '0.1254',
  },
  {
    key: '12',
    name: 'Slurry Pump',
    age: 'Motor Right Side Bearing',
    address: '0.125',
    tags: '0.1254',
    action: '0.1254',
    action2: '0.1254',
  },
  {
    key: '123',
    name: 'Slurry Pump',
    age: 'Input Shaft NDE Bearing',
    address: '0.125',
    tags: '0.1254',
    action: '0.1254',
    action2: '0.1254',
  },
  {
    key: '124',
    name: 'Slurry Pump',
    age: 'Intermediate Shaft NDE Bearing',
    address: '0.125',
    tags: '0.1254',
    action: '0.1254',
    action2: '0.1254',
  },
  {
    key: '1245',
    name: 'Slurry Pump',
    age: 'Output Shaft DE Bearing',
    address: '0.125',
    tags: '0.1254',
    action: '0.1254',
    action2: '0.1254',
  },
];

const Welcome: React.FC = () => {
  useEffect(() => {
    const chart = new Chart({ container: 'container', height: 250 });
    chart.options({
      type: 'view',
      autoFit: true,
      coordinate: { type: 'theta', outerRadius: 0.8, innerRadius: 0.5 },
      children: [
        {
          type: 'interval',
          data: [
            { item: 'Drawworks', count: 40, percent: 0.5 },
            { item: 'Rotary Table', count: 20, percent: 0.25 },
            { item: 'Slurry Pump', count: 20, percent: 0.25 },
          ],
          encode: { y: 'percent', color: 'item' },
          transform: [{ type: 'stackY' }],
          legend: {
            color: { position: 'bottom', layout: { justifyContent: 'center' } },
          },
          labels: [
            {
              position: 'outside',
              text: (data) => `${data.item}: ${data.percent * 100}%`,
            },
          ],
          tooltip: {
            items: [
              (data) => ({
                name: data.item,
                value: `${data.percent * 100}%`,
              }),
            ],
          },
        },
      ],
    });

    chart.render();
  }, []);

  useEffect(() => {
    const chart = new Chart({ container: 'container2', height: 250 });
    chart.options({
      type: 'view',
      autoFit: true,
      coordinate: { type: 'theta', outerRadius: 0.8, innerRadius: 0.5 },
      children: [
        {
          type: 'interval',
          data: [
            { item: 'Drawworks', count: 10, percent: 0.16666 },
            { item: 'Rotary Table', count: 20, percent: 0.3333 },
            { item: 'Slurry Pump', count: 30, percent: 0.5 },
          ],
          encode: { y: 'percent', color: 'item' },
          transform: [{ type: 'stackY' }],
          legend: {
            color: { position: 'bottom', layout: { justifyContent: 'center' } },
          },
          labels: [
            {
              position: 'outside',
              text: (data) => `${data.item}: ${data.percent * 100}%`,
            },
          ],
          tooltip: {
            items: [
              (data) => ({
                name: data.item,
                value: `${data.percent * 100}%`,
              }),
            ],
          },
        },
      ],
    });

    chart.render();
  }, []);

  useEffect(() => {
    const data = [
      { name: 'Rotary Table', time: '2025-03-12', 'Alarm Count': 18 },
      { name: 'Rotary Table', time: '2025-03-14', 'Alarm Count': 28 },
      { name: 'Rotary Table', time: '2025-03-15', 'Alarm Count': 39 },
      { name: 'Rotary Table', time: '2025-03-16', 'Alarm Count': 81 },
      { name: 'Rotary Table', time: '2025-03-17', 'Alarm Count': 47 },
      { name: 'Rotary Table', time: '2025-03-18', 'Alarm Count': 20 },
      { name: 'Rotary Table', time: '2025-03-19', 'Alarm Count': 24 },

      { name: 'Drawworks', time: '2025-03-12', 'Alarm Count': 11 },
      { name: 'Drawworks', time: '2025-03-14', 'Alarm Count': 3 },
      { name: 'Drawworks', time: '2025-03-15', 'Alarm Count': 12 },
      { name: 'Drawworks', time: '2025-03-16', 'Alarm Count': 2 },
      { name: 'Drawworks', time: '2025-03-17', 'Alarm Count': 56 },
      { name: 'Drawworks', time: '2025-03-18', 'Alarm Count': 10 },
      { name: 'Drawworks', time: '2025-03-19', 'Alarm Count': 33 },

      { name: 'Slurry Pump', time: '2025-03-12', 'Alarm Count': 8 },
      { name: 'Slurry Pump', time: '2025-03-14', 'Alarm Count': 24 },
      { name: 'Slurry Pump', time: '2025-03-15', 'Alarm Count': 19 },
      { name: 'Slurry Pump', time: '2025-03-16', 'Alarm Count': 50 },
      { name: 'Slurry Pump', time: '2025-03-17', 'Alarm Count': 18 },
      { name: 'Slurry Pump', time: '2025-03-18', 'Alarm Count': 6 },
      { name: 'Slurry Pump', time: '2025-03-19', 'Alarm Count': 12 },
    ];

    const chart = new Chart({
      container: 'container3',
      autoFit: true,
      height: 300,
    });

    chart
      .interval()
      .data(data)
      .encode('x', 'time')
      .encode('y', 'Alarm Count')
      .encode('color', 'name')
      .transform({ type: 'dodgeX' })
      .interaction('elementHighlight', { background: true });

    chart.render();
  }, []);

  useEffect(() => {
    const data = [
      { name: "Mesa rotativa", time: '2025-03-12',  "Handled Alarms": 12 },
      { name: "Mesa rotativa", time: '2025-03-14',  "Handled Alarms": 16 },
      { name: "Mesa rotativa", time: '2025-03-15',  "Handled Alarms": 29 },
      { name: "Mesa rotativa", time: '2025-03-16',  "Handled Alarms": 80 },
      { name: "Mesa rotativa", time: '2025-03-17',  "Handled Alarms": 45 },
      { name: "Mesa rotativa", time: '2025-03-18',  "Handled Alarms": 18 },
      { name: "Mesa rotativa", time: '2025-03-19',  "Handled Alarms": 19 },

      { name: "Malacate", time: '2025-03-12',  "Handled Alarms": 10 },
      { name: "Malacate", time: '2025-03-14',  "Handled Alarms": 3 },
      { name: "Malacate", time: '2025-03-15',  "Handled Alarms": 11 },
      { name: "Malacate", time: '2025-03-16',  "Handled Alarms": 1 },
      { name: "Malacate", time: '2025-03-17',  "Handled Alarms": 50 },
      { name: "Malacate", time: '2025-03-18',  "Handled Alarms": 8 },
      { name: "Malacate", time: '2025-03-19',  "Handled Alarms": 32 },

      { name: "Bomba de lodo", time: '2025-03-12',  "Handled Alarms": 6 },
      { name: "Bomba de lodo", time: '2025-03-14',  "Handled Alarms": 20 },
      { name: "Bomba de lodo", time: '2025-03-15',  "Handled Alarms": 18 },
      { name: "Bomba de lodo", time: '2025-03-16',  "Handled Alarms": 40 },
      { name: "Bomba de lodo", time: '2025-03-17',  "Handled Alarms": 16 },
      { name: "Bomba de lodo", time: '2025-03-18',  "Handled Alarms": 6 },
      { name: "Bomba de lodo", time: '2025-03-19',  "Handled Alarms": 12 },
    ];

    const chart = new Chart({
      container: 'container4',
      autoFit: true,
      height: 300,
    });

    chart
      .interval()
      .data(data)
      .encode('x', 'time')
      .encode('y', "Handled Alarms")
      .encode('color', 'name')
      .transform({ type: 'dodgeX' })
      .interaction('elementHighlight', { background: true });

    chart.render();
  }, []);


  useEffect(()=>{
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
      height:76
    });
    
    chart.data(data);
    
    chart
      .area()
      .encode('x', (d) => d.year)
      .encode('y', 'value')
      .encode('shape', 'area') // 'area', 'smooth', 'hvh', 'vh', 'hv'
      .style('opacity', 0.2)
      .axis('y', { labelFormatter: '~s', title: false });
    
    chart.line().encode('x', 'year').encode('y', 'value').axis({x:false,y:false})
    
    chart.render();
    
  },[])

  return (
    <div>
      <Row>
        <Col md={6}>
          <Card className={styles.card}>
            <div className="card-top">
              <div>
                <span className="top-text">Total Alarms</span>
              </div>
            </div>
            <div className="num">1,818</div>
            <div className="box">
              <div>
                WoW 12% <CaretUpOutlined style={{ color: '#f5222d' }} />
              </div>
              <div style={{ paddingLeft: 24 }}>
                DoD：5% <CaretDownOutlined style={{ color: '#52c41a' }} />
              </div>
            </div>
            <div className="footer">
              <div>Daily Alarm Count 12</div>
            </div>
          </Card>
        </Col>
        <Col md={6}>
          <Card className={styles.card} style={{ margin: '0 12px' }}>
            <div className="card-top">
              <div>
                <span className="top-text">Total Handled Alarms</span>
              </div>
            </div>
            <div>
            <div className="container6" id="container6"></div>
            </div>
            <div className="footer">
              <div>Comparison Period：1,78</div>
              <div style={{ paddingLeft: 24 }}>MoM：80.12%</div>
            </div>
          </Card>
        </Col>
        <Col md={6}>
          <Card className={styles.card} style={{ margin: '0 12px' }}>
            <div className="card-top">
              <div>
                <span className="top-text">Current Unhandled Alarms</span>
              </div>
            </div>
            <div className="num">18</div>
            <div className="box">
              <div>
                WoW 6% <CaretUpOutlined style={{ color: '#f5222d' }} />
              </div>
              <div style={{ paddingLeft: 24 }}>
                DoD：2% <CaretDownOutlined style={{ color: '#52c41a' }} />
              </div>
            </div>
            <div className="footer">
              <div>Current Unhandled Alarms 6</div>
            </div>
          </Card>
        </Col>
        <Col md={6}>
          <Card className={styles.card}>
            <div className="card-top">
              <div>
                <span className="top-text">Online Devices</span>
              </div>
            </div>
            <div className="num">90%</div>
            <Progress style={{ marginTop: 12 }} percent={90} strokeColor={twoColors} />
            <div className="footer">
              <div>Online：18</div>
              <div style={{ paddingLeft: 24 }}>Offline：2</div>
            </div>
          </Card>
        </Col>
      </Row>

      <Row style={{ marginTop: 12 }}>
        <Col md={6}>
          <Card title="Alarm Type" className={styles.card}>
            <div className="container" id="container"></div>
          </Card>
        </Col>
        <Col md={6}>
          <Card title="Abnormality Duration Ratio" className={styles.card} style={{ margin: '0 24px' }}>
            <div className="container2" id="container2"></div>
          </Card>
        </Col>
        <Col md={12}>
          <Card title="Real-time Monitoring" className={styles.card}>
            <Table
              size="small"
              columns={columns}
              dataSource={data}
              pagination={{ defaultPageSize: 4 }}
            />
          </Card>
        </Col>
      </Row>
      <Row style={{ marginTop: 12 }}>
        <Col md={12}>
          <Card title="Alarm Statistics (Last 7 Days)" className={styles.card} style={{ marginRight: 24 }}>
            <div className="container3" id="container3"></div>
          </Card>
        </Col>
        <Col md={12}>
          <Card title="Handled Alarms (Last 7 Days)" className={styles.card}>
            <div className="container4" id="container4"></div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Welcome;
