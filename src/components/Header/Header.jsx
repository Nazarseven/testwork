import React from 'react'
import { AppContext } from '../App/App'

export const Header = () => {

  const { langData, activeIndex, setActiveIndex } = React.useContext(AppContext)
  const languages = ['Ru', 'En', 'Ua']
  const [hide, setHide] = React.useState(false)
  const [hide1, setHide1] = React.useState(false)
  const [hide2, setHide2] = React.useState(false)
  const [hide3, setHide3] = React.useState(false)
  const [hide4, setHide4] = React.useState(false)
  const [hide5, setHide5] = React.useState(false)
  const [hide6, setHide6] = React.useState(false)
  const [hide7, setHide7] = React.useState(false)
  const [hide8, setHide8] = React.useState(false)
  const [hide9, setHide9] = React.useState(false)
  const [hide10, setHide10] = React.useState(false)
  const [hide11, setHide11] = React.useState(false)
  const [hide12, setHide12] = React.useState(false)
  const [hide13, setHide13] = React.useState(false)
  const [hide14, setHide14] = React.useState(false)
  const [count, setCount] = React.useState(20)

  const onClickStart = () => {
    setHide(true)
    setHide1(true)
  }

  const onClickStart2 = () => {
    setHide1(false)
    setHide2(true)
    setCount(20)
  }

  React.useEffect(() => {
    console.log('HI')
    setInterval(() => {
        setCount(prev => prev - 1)
    }, 1000)
            setInterval(() => {
        setHide2(false)
        setHide3(true)
        setCount(20)
        setCount(prev => prev - 1)
            setInterval(() => {
        setHide3(false)
        setHide4(true)
        setCount(20)
        setCount(prev => prev - 1)
            setInterval(() => {
        setHide4(false)
        setHide5(true)
        setCount(20)
        setCount(prev => prev - 1)
            setInterval(() => {
        setHide5(false)
        setHide6(true)
        setCount(20)
        setCount(prev => prev - 1)
            setInterval(() => {
        setHide6(false)
        setHide7(true)
        setCount(20)
        setCount(prev => prev - 1)
            setInterval(() => {
        setHide7(false)
        setHide8(true)
        setCount(20)
        setCount(prev => prev - 1)
            setInterval(() => {
        setHide8(false)
        setHide9(true)
        setCount(20)
        setCount(prev => prev - 1)
            setInterval(() => {
        setHide9(false)
        setHide10(true)
        setCount(20)
        setCount(prev => prev - 1)
            setInterval(() => {
        setHide10(false)
        setHide11(true)
        setCount(20)
        setCount(prev => prev - 1)
            setInterval(() => {
        setHide11(false)
        setHide12(true)
        setCount(20)
        setCount(prev => prev - 1)
            setInterval(() => {
        setHide12(false)
        setHide13(true)
        setCount(20)
        setCount(prev => prev - 1)
            setInterval(() => {
        setHide13(false)
        setHide14(true)
        setCount(20)
        setCount(prev => prev - 1)
        }, 20000)
        }, 20000)
        }, 20000)
        }, 20000)
        }, 20000)
        }, 20000)
        }, 20000)
        }, 20000)
        }, 20000)
        }, 20000)
        }, 20000)
        }, 20000)
  }, [])

  const onClickLanguage = () => {
    switch (activeIndex) {
        case 0:
            setActiveIndex(activeIndex + 1)
            break;
        case 1:
            setActiveIndex(activeIndex + 1)
            break;
        case 2:
            setActiveIndex(activeIndex - 2)
            break;
    
        default:
            break;
    }
  }



  return (
    <div className='container'>
        <div className="header">
            <div className="row">
                <div>
                    {hide && <img className='eye' src="images/eye.png" alt="" />}
                </div>
                <div className='row2'>
                    <h2 onClick={onClickLanguage}>{languages[activeIndex]}</h2>
                    <img src="images/bell.png" alt="" />
                    <img src="images/signal.png" alt="" />
                </div>
            </div>
            <div className={hide ? 'headerMiddle2Hide' : 'headerMiddle2'}>
                <img className='eye2' src="images/eye.png" alt="" />
                <button className='button' onClick={onClickStart}>Начать зарядку для глаз</button>
                <a href="">Рекомендации</a>
            </div>
            {/*  */}
            <div className={hide1 ? 'headerMiddle' : 'headerMiddleHide'}>
                <h2>{langData[activeIndex].guide}</h2>
                <p>{langData[activeIndex].guideTitle}</p>
                <p>{langData[activeIndex].guideTitle1}</p>
                <p>{langData[activeIndex].guideTitle2}</p>
                <p>{langData[activeIndex].guideTitle3}</p>
                <p>{langData[activeIndex].guideTitle4}</p>
                <div className="checkButton row2">
                    <div className="row2">
                        <input className='check' type='checkbox' />
                        <p>{langData[activeIndex].guideCheck}</p>
                    </div>
                    <button onClick={onClickStart2} className='button'>{langData[activeIndex].guideButton}</button>
                </div>
            </div>
            {/*  */}
            
            <div className={hide2 ? 'headerMiddle' : 'headerMiddleHide'}>
                <h2 className='relax'>{langData[activeIndex].relax}</h2>
                <p className='count'>{count}</p>
                <p className='wait'>{langData[activeIndex].wait}</p>
            </div>
            <div className={hide3 ? 'headerMiddle' : 'headerMiddleHide'}>
                <h2 className='relax'>{langData[activeIndex].upDown}</h2>
                <p className='count'>{count}</p>
                <p className='wait'>{langData[activeIndex].wait1}</p>
                <div className="box"></div>
            </div>
            <div className={hide4 ? 'headerMiddle' : 'headerMiddleHide'}>
                <h2 className='relax'>{langData[activeIndex].eyes}</h2>
                <p className='count'>{count}</p>
                <p className='wait'>{langData[activeIndex].wait2}</p>
            </div>
            <div className={hide5 ? 'headerMiddle' : 'headerMiddleHide'}>
                <div className="box2"></div>
                <h2 className='relax'>{langData[activeIndex].leftRight}</h2>
                <p className='count'>{count}</p>
                <p className='wait'>{langData[activeIndex].wait3}</p>
            </div>
            <div className={hide6 ? 'headerMiddle' : 'headerMiddleHide'}>
                <div className="box3"></div>
                <h2 className='relax'>{langData[activeIndex].diagonal}</h2>
                <p className='count'>{count}</p>
                <p className='wait'>{langData[activeIndex].wait4}</p>
            </div>
            <div className={hide7 ? 'headerMiddle' : 'headerMiddleHide'}>
                <h2 className='relax'>{langData[activeIndex].eyes2}</h2>
                <p className='count'>{count}</p>
                <p className='wait'>{langData[activeIndex].wait5}</p>
            </div>
            <div className={hide8 ? 'headerMiddle' : 'headerMiddleHide'}>
                <div className="box4"></div>
                <h2 className='relax'>{langData[activeIndex].clock}</h2>
                <p className='count'>{count}</p>
                <p className='wait'>{langData[activeIndex].wait6}</p>
            </div>
            <div className={hide9 ? 'headerMiddle' : 'headerMiddleHide'}>
                <h2 className='relax'>{langData[activeIndex].spyral}</h2>
                <p className='count'>{count}</p>
                <p className='wait'>{langData[activeIndex].wait7}</p>
            </div>
            <div className={hide10 ? 'headerMiddle' : 'headerMiddleHide'}>
                <h2 className='relax'>{langData[activeIndex].eyes3}</h2>
                <p className='count'>{count}</p>
                <p className='wait'>{langData[activeIndex].wait8}</p>
            </div>
            <div className={hide11 ? 'headerMiddle' : 'headerMiddleHide'}>
                <h2 className='relax'>{langData[activeIndex].near}</h2>
                <p className='count'>{count}</p>
                <p className='wait'>{langData[activeIndex].wait9}</p>
            </div>
            <div className={hide12 ? 'headerMiddle' : 'headerMiddleHide'}>
                <h2 className='relax'>{langData[activeIndex].relax2}</h2>
                <p className='count'>{count}</p>
                <p className='wait'>{langData[activeIndex].wait10}</p>
            </div>
            <div className={hide13 ? 'headerMiddle' : 'headerMiddleHide'}>
                <h2 className='relax'>{langData[activeIndex].good}</h2>
            </div>
        </div>
    </div>
  )
}
