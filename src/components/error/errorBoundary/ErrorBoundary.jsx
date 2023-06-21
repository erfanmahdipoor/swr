import React, { Component } from 'react'
import TemplateError from '../templateError/TemplateError'

export default class ErrorBoundary extends Component {
    state={hasError:false ,error:null}
    static getDrivedStatFromError(error){
        return {
            hasError:true,
            error,
        }
    }
  render() {
   if(this.state.hasError){
    return <TemplateError/>
   }
   return this.props.children
  }
}
