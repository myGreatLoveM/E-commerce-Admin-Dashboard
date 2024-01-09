import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Loader from './components/Loader'
import Layout from './layouts/Layout'

const Dashboard = lazy(() => import('./pages/Dashboard'))
const Product = lazy(() => import('./pages/Product'))
const Customer = lazy(() => import('./pages/Customer'))
const Transaction = lazy(() => import('./pages/Transaction'))
const NewProduct = lazy(() => import('./pages/management/NewProduct'))
const ProductManagement = lazy(() => import('./pages/management/ProductManagement'))
const TransactionManagement = lazy(() => import('./pages/management/TransactionManagement'))
const BarCharts = lazy(() => import('./pages/charts/BarCharts'))
const PieCharts = lazy(() => import('./pages/charts/PieCharts'))
const LineCharts = lazy(() => import('./pages/charts/LineCharts'))
const Stopwatch = lazy(() => import('./pages/apps/Stopwatch'))
const Coupon = lazy(() => import('./pages/apps/Coupon'))
const Toss = lazy(() => import('./pages/apps/Toss'))

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path='/admin/dashboard'
            element={
              <Layout>
                <Dashboard />
              </Layout>
            }
          />
          <Route
            path='/admin/product'
            element={
              <Layout>
                <Product />
              </Layout>
            }
          />
          <Route
            path='/admin/customer'
            element={
              <Layout>
                <Customer />
              </Layout>
            }
          />
          <Route
            path='/admin/transaction'
            element={
              <Layout>
                <Transaction />
              </Layout>
            }
          />

          {/* Charts  */}
          <Route
            path='admin/chart/bar'
            element={
              <Layout>
                <BarCharts />
              </Layout>
            }
          />
          <Route
            path='admin/chart/pie'
            element={
              <Layout>
                <PieCharts />
              </Layout>
            }
          />
          <Route
            path='admin/chart/line'
            element={
              <Layout>
                <LineCharts />
              </Layout>
            }
          />

          {/* Apps  */}
          <Route
            path='admin/app/stopwatch'
            element={
              <Layout>
                <Stopwatch />
              </Layout>
            }
          />
          <Route
            path='admin/app/coupon'
            element={
              <Layout>
                <Coupon />
              </Layout>
            }
          />
          <Route
            path='admin/app/toss'
            element={
              <Layout>
                <Toss />
              </Layout>
            }
          />

          {/* Management */}
          <Route
            path='/admin/product/new'
            element={
              <Layout>
                <NewProduct />
              </Layout>
            }
          />
          <Route
            path='/admin/product/:id'
            element={
              <Layout>
                <ProductManagement />
              </Layout>
            }
          />
          <Route
            path='/admin/transaction/:id'
            element={
              <Layout>
                <TransactionManagement />
              </Layout>
            }
          />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
