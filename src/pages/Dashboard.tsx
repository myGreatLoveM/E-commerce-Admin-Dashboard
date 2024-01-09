import { BsSearch } from 'react-icons/bs'
import { FaRegBell } from 'react-icons/fa'
import { HiTrendingDown, HiTrendingUp } from 'react-icons/hi'
import { BiMaleFemale } from 'react-icons/bi'
import userImg from '../assets/userpic.png'
import data from '../data/data.json'
import { BarChart, DoughnutChart } from '../components/Charts'
import DashboardTable from '../components/DashboardTable'

const Dashboard = () => {
  return (
    <main className='dashboard'>
      <div className='bar'>
        <BsSearch />
        <input type='text' placeholder='Search for data, users, docs' />
        <FaRegBell />
        <img src={userImg} alt='User' />
      </div>
      <section className='widget-container'>
        <WidgetItem
          heading='Revenue'
          value={3400000}
          percent={40}
          color='rgb(0, 115, 255)'
          amount={true}
        />
        <WidgetItem
          heading='Users'
          value={400}
          percent={-14}
          color='rgb(0, 198, 202)'
        />
        <WidgetItem
          heading='Transcations'
          value={23000}
          percent={80}
          color='rgb(255, 196, 0)'
        />
        <WidgetItem
          heading='Products'
          value={1000}
          percent={30}
          color='rgb(76, 0, 255)'
        />
      </section>
      <section className='graph-container'>
        <div className='revenue-chart'>
          <h2>Revenue & Transaction</h2>
          <BarChart
            data_1={[200, 444, 343, 556, 778, 455, 990]}
            data_2={[300, 144, 433, 655, 237, 755, 190]}
            title_1='Revenue'
            title_2='Transaction'
            bgColor_1='rgb(0,115,255)'
            bgColor_2='rgba(53,162,232,0.8'
          />
        </div>
        <div className='dashboard-categories'>
          <h2>Inventory</h2>
          <div>
            {data.categories.map((category) => (
              <CategoryItem
                key={category.heading}
                heading={category.heading}
                value={category.value}
                color={`hsl(${category.value * 4},${category.value}%,50%)`}
              />
            ))}
          </div>
        </div>
      </section>
      <section className='transaction-container'>
        <div className='gender-chart'>
          <h2>Gender Ratio</h2>
          <DoughnutChart
            labels={['Female', 'Male']}
            data={[12, 19]}
            backgroundColor={['hsl(340, 82%, 56%)', 'rgba(53, 162, 235, 0.8)']}
            cutout={90}
          />
          <p>
            <BiMaleFemale />
          </p>
        </div>
        <DashboardTable data={data.transaction} />
      </section>
    </main>
  )
}

type WidgetItemProps = {
  heading: string
  value: number
  percent: number
  color: string
  amount?: boolean
}

const WidgetItem = ({
  heading,
  value,
  percent,
  color,
  amount = false,
}: WidgetItemProps) => {
  return (
    <article className='widget'>
      <div className='widget-info'>
        <p>{heading}</p>
        <h4>{amount ? `$${value}` : value}</h4>
        {percent > 0 ? (
          <span className='green'>
            <HiTrendingUp /> +{percent}%{' '}
          </span>
        ) : (
          <span className='red'>
            <HiTrendingDown /> {percent}%{' '}
          </span>
        )}
      </div>
      <div
        className='widget-circle'
        style={{
          background: `conic-gradient(
          ${color} ${(Math.abs(percent) / 100) * 360}deg,
          rgb(255,255,255) 0
        )`,
        }}
      >
        <span style={{ color }}>{percent}%</span>
      </div>
    </article>
  )
}

type CategoryItemProps = {
  color: string
  value: number
  heading: string
}

const CategoryItem = ({ color, value, heading }: CategoryItemProps) => {
  return (
    <div className='category-item'>
      <h5>{heading}</h5>
      <div>
        <div
          style={{
            backgroundColor: color,
            width: `${value}%`,
          }}
        ></div>
      </div>
      <span>{value}%</span>
    </div>
  )
}

export default Dashboard
