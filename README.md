## redux-example
### redux基本工作流程<br/>
![](http://www.ruanyifeng.com/blogimg/asset/2016/bg2016091802.jpg)

* 用户发出action;
  * store.dispatch(action);
* Store自动调用Reducer,并且传入当前state和收到的action,返回新的state;
* state一旦发生变化，Store调用监听函数；
  * store.subscribe(listener);
  * listener通过store.getState()得到当前状态，触发重新渲染view


