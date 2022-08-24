import React from 'react'


import './styles.scss'

const makeTable = (perPage, values, data) => {
    let i = 0;
    let colums = []

    for(i=0;i<perPage-1;i++){

        colums.push(
            <div className='table_body_row'>
                {data[i] ?
                values.map(({accesor, Cell})=>{

                    if(Cell){
                        var cellContent = Cell(data[i])
                    }else{
                        console.warn(data[i]);
                        cellContent = data[i][accesor]
                    }

                    return  <div className='table_body_row_cell'>
                                {cellContent}
                            </div>   
                })
                :null
                }
            </div>
        )

    }
    console.warn(colums)

    return colums
}

const Table = ({filters,colums, data, loading, perPage}) => {
  
    const headers = colums.map(colum=>colum.header)
    const values = colums.map(({accesor, Cell})=>{
        return {
            accesor,
            Cell
        }
    })

    return (
    <div>
        {filters &&
            <div className='filters'>

            </div>
        }
        <div className='table'>
            <div className='table_head'>
                {
                    headers.map((header, index)=>{
                        return(
                            <div key={header+index} className='table_head_header'>
                                {header}
                            </div>
                        )
                    })
                }
            </div>
            <div className='table_body'>
            {!loading ?
                <>{makeTable(perPage, values, data)}</>
            :
            <h2>CARGANDO</h2>
            }
            </div>
        </div>
    </div>)
}

export default Table