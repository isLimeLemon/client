import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Table from '../../components/TableComponent'
import productsActions from '../../store/products/actions'
import { getLoadingProducts, getProducts } from '../../store/products/selector'

import './styles.scss'

const HomeScreen = ({
  getProducts,
  products,
  loadingProducts
}) => {

  useEffect(() => {
      getProducts()
  }, [])

  const [perPage, setPerPage] = useState(25)

  const colums = [
    {
      header:'Titulo',
      accesor:'title',
    },
    {
      header:'Precio',
      accesor:'price'
    },
    {
      header:'Disponibles',
      accesor:'units'
    },
    {
      header:'Accion',
      Cell: props => {
        return <button>Añadir</button>
      }
    }
  ]

  return (
    <div className='home'>
      <div>
      
      </div>
      <div>
      <input type="text" />
      <Table perPage={perPage} colums={colums} data={products} loading={loadingProducts} />
      </div>
    </div>
  )
}

const mapDistpatchToProps = dispatch => {
  return {
    getProducts:()=>{return dispatch(productsActions.loadProducts())}
  }
}

const mapStateToProps = state => {
  return {
    products:getProducts(state),
    loadingProducts:getLoadingProducts(state)
  }
}

const connectedHome = connect(
  mapStateToProps,
  mapDistpatchToProps
)(HomeScreen)

export default connectedHome