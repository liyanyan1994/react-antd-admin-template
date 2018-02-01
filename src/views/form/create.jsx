import React from 'react'
import ArticleDetail from './ArticleDetail'

export default class CreateForm extends React.Component {
    render(){
        return (
            <ArticleDetail isEdit = {false}></ArticleDetail>
        )
    }
}