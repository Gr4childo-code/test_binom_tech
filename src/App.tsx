/* eslint-disable @typescript-eslint/no-explicit-any */
import { Chart as ChartJS, ArcElement, Plugin, ChartData } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import './App.css';
ChartJS.register(ArcElement);

const App = () => {
  const data: ChartData<'doughnut'> = {
    datasets: [
      {
        data: [227700, 690000],
        backgroundColor: ['rgb(252,181,59)', 'rgb(80,80,80)']
      }
    ]
  };

  const textCenter: Plugin = {
    id: 'text-center',
    beforeDatasetsDraw(chart) {
      const { ctx } = chart;
      ctx.save();
      ctx.font = '700 30px Rubik';
      ctx.fillStyle = 'rgb(252,181,59)';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(
        `${(data.datasets[0].data[0] / data.datasets[0].data[1]) * 100}%`,
        chart.getDatasetMeta(0).data[0].x,
        chart.getDatasetMeta(0).data[0].y
      );
    }
  };
  return (
    <div className='container'>
      <h1>BinomTech Test</h1>
      <div className='chart'>
        <Doughnut
          data={data}
          width={150}
          height={150}
          options={{ maintainAspectRatio: false }}
          plugins={[textCenter as any]}
        />
      </div>

      <div className='infoChart'>
        <div className='infoChart__fact'>
          ФАКТ / ПЛАН (НА ТЕКУЩУЮ ДАТУ)
          <div className='infoChart__number'>
            <span className='infoChart__first'>{data.datasets[0].data[0]}</span>
            <span className='infoChart__second'> / {data.datasets[0].data[0]}</span>
          </div>
        </div>
        <div className='infoChart__pilot'>
          ФАКТ / ПЛАН (НА ТЕКУЩУЮ ДАТУ)
          <div className='infoChart__number'>
            <span className='infoChart__first'>{data.datasets[0].data[0]}</span>
            <span className='infoChart__second'> / {data.datasets[0].data[0]}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
