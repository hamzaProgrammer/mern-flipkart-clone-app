import './App.css';
import { Routes , Route } from 'react-router'
import {Grid} from '@mui/material'
import {BrowserRouter} from 'react-router-dom'
import { useSelector } from 'react-redux'


import Home from './frontEnd/pages/home/Home'
import ProdDetails from './frontEnd/pages/prodDeatil/ProdDetails'
import Cart from './frontEnd/pages/cartpage/Cart'
import SingleCategory from './frontEnd/pages/singleTypeProds/SingleCategoryProds'
import CateSingleProds from './frontEnd/pages/singleCateProds/SingleCateProds'
import Checkout from './frontEnd/pages/checkout/Checkout'


// Dashboard Section //

import SignIn from './dashboard/pages/signin/SignIn'
import SignUp from './dashboard/pages/signup/SignUp'
import HomeDash from './dashboard/pages/home/Home'
import SidebarDash from './dashboard/components/sidebar/Sidebar'
import Category from './dashboard/pages/addCategories/NewCategory'
import NewBrand from './dashboard/pages/addBrands/NewBrand'
import Navbar from './dashboard/components/topbar/Topbar'
import SubCategory from './dashboard/pages/addSubCategories/NewSubCategory'
import CategoriesList from './dashboard/pages/allCategories/allCategories'
import AllBrands from './dashboard/pages/allBrands/allBrands'
import CategoriesSubList from './dashboard/pages/allCategories/allSubCategories'
import NewProduct from './dashboard/pages/newProduct/NewProduct'
import AllProducts from './dashboard/pages/allProducts/allProducts'
import Product from './dashboard/pages/product/Product'




function App() {
   const { admin } = useSelector(state => state.userReducer)

  return (
    <>
      <BrowserRouter>
        <Routes>

            {/* Dashboard Section Starts here */}

            {
              admin ? (
                  <Route exact path='/admin' element={<HomeDash/>} />
              ) : (
                <Route exact path='/admin/signin' element={<SignIn/>} />
              )
            }

            {
              admin ? (
                  <Route exact path='/admin/addCategory' element={
                <>
                  <Grid container style={{marginTop: '0px'}} >
                      <Navbar/>
                      <Grid item xs={3}>
                        <SidebarDash/>
                      </Grid>
                      <Grid item xs={9} style={{marginTop: '30px'}}>
                        <Category/>
                      </Grid>
                  </Grid>
                </>
            }
            />
              ) : (
                <Route exact path='/admin/signin' element={<SignIn/>} />
              )
            }


              {
                admin ? (
                    <Route exact path='/admin/addSubCategory' element={
                  <>
                    <Grid container style={{marginTop: '0px'}} >
                        <Navbar/>
                        <Grid item xs={3}>
                          <SidebarDash/>
                        </Grid>
                        <Grid item xs={9} style={{marginTop: '30px'}}>
                          <SubCategory/>
                        </Grid>
                    </Grid>
                  </>
              }
              />
                ) : (
                  <Route exact path='/admin/signin' element={<SignIn/>} />
                )
            }

              {
                admin ? (
                    <Route exact path='/admin/allCategories' element={
                <>
                  <Grid container style={{marginTop: '0px'}} >
                      <Navbar/>
                      <Grid item xs={3}>
                        <SidebarDash/>
                      </Grid>
                      <Grid item xs={9} style={{marginTop: '30px'}}>
                        <CategoriesList/>
                      </Grid>
                  </Grid>
                </>
            }
            />
                ) : (
                  <Route exact path='/admin/signin' element={<SignIn/>} />
                )
            }

            {
                admin ? (
                    <Route exact path='/admin/allSubCategories' element={
                <>
                  <Grid container style={{marginTop: '0px'}} >
                      <Navbar/>
                      <Grid item xs={3}>
                        <SidebarDash/>
                      </Grid>
                      <Grid item xs={9} style={{marginTop: '30px'}}>
                        <CategoriesSubList/>
                      </Grid>
                  </Grid>
                </>
            }
            />
                ) : (
                  <Route exact path='/admin/signin' element={<SignIn/>} />
                )
            }

            {
                admin ? (
                    <Route exact path='/admin/brands/addNew' element={
                  <>
                    <Grid container style={{marginTop: '0px'}} >
                        <Navbar/>
                        <Grid item xs={3}>
                          <SidebarDash/>
                        </Grid>
                        <Grid item xs={9} style={{marginTop: '30px'}}>
                          <NewBrand/>
                        </Grid>
                    </Grid>
                  </>
              }
              />
                ) : (
                  <Route exact path='/admin/signin' element={<SignIn/>} />
                )
            }


            {
                admin ? (
                    <Route exact path='/admin/brands/allBrands' element={
                <>
                  <Grid container style={{marginTop: '0px'}} >
                      <Navbar/>
                      <Grid item xs={3}>
                        <SidebarDash/>
                      </Grid>
                      <Grid item xs={9} style={{marginTop: '30px'}}>
                        <AllBrands/>
                      </Grid>
                  </Grid>
                </>
            }
            />
                ) : (
                  <Route exact path='/admin/signin' element={<SignIn/>} />
                )
            }

            {
                admin ? (
                    <Route exact path='/admin/products/addProduct' element={
                <>
                  <Grid container style={{marginTop: '0px'}} >
                      <Navbar/>
                      <Grid item xs={3}>
                        <SidebarDash/>
                      </Grid>
                      <Grid item xs={9} style={{marginTop: '30px'}}>
                        <NewProduct/>
                      </Grid>
                  </Grid>
                </>
            }
            />
                ) : (
                  <Route exact path='/admin/signin' element={<SignIn/>} />
                )
            }


            {
                admin ? (
                    <Route exact path='/admin/products/allProduct' element={
                <>
                  <Grid container style={{marginTop: '0px'}} >
                      <Navbar/>
                      <Grid item xs={3}>
                        <SidebarDash/>
                      </Grid>
                      <Grid item xs={9} style={{marginTop: '30px'}}>
                        <AllProducts/>
                      </Grid>
                  </Grid>
                </>
            }
            />
                ) : (
                  <Route exact path='/admin/signin' element={<SignIn/>} />
                )
            }


            {
                admin ? (
                    <Route exact path='/admin/products/edit/:id' element={
                <>
                  <Grid container style={{marginTop: '0px'}} >
                      <Navbar/>
                      <Grid item xs={3}>
                        <SidebarDash/>
                      </Grid>
                      <Grid item xs={9} style={{marginTop: '30px'}}>
                        <Product/>
                      </Grid>
                  </Grid>
                </>
            }
            />
                ) : (
                  <Route exact path='/admin/signin' element={<SignIn/>} />
                )
            }


            {
                admin ? (
                      <Route exact path='/admin/signin' element={<SignIn/>} />
                ) : (
                  <Route exact path='/admin' element={<SignIn/>} />
                )
            }

            {/* Dashboard Section Ends here */}



            <Route exact path='/' element={<Home/>} />

            <Route exact path='/products/productDetails/:id' element={<ProdDetails/>} />

            <Route exact path='/cartPage' element={<Cart/>} />

            <Route exact path='/checkout' element={<Checkout/>} />

            <Route exact path='/products/:parentCategory/:subCate' element={<SingleCategory/>} />

            <Route exact path='/categoryProdDetails/:size' element={<CateSingleProds/>} />


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
