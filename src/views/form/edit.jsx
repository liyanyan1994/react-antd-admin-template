import React from 'react'
import ArticleDetail from './ArticleDetail'

export default class EditForm extends React.Component {
    render(){
        return (
            <ArticleDetail isEdit = {true}></ArticleDetail>
        )
    }
}