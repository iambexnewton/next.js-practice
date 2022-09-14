import styles from "../styles/Form.module.css";
import { useState } from "react";

const Form = () => {
    const handleSubmit =  (event) => {
        event.preventDefault();
        console.log(event.target.value);
      };


    return (



<form className={styles.form} onSubmit={handleSubmit}>
    <label className={styles.title}>Name</label>
    <input id="name" type="name" className={styles.inputText}/>
   
 
    <p className={styles.title}>Score</p>
    <ul className={styles.ul}>
<li className={styles.li}>
  <label className={styles.label}>1</label>
<input className={styles.input} type="radio" value="one"  />
</li>
<li className={styles.li}>
  <label className={styles.label}>2</label>
   <input className={styles.input} type="radio" value="two" />
</li>
<li className={styles.li}>
    <label className={styles.label}>3</label>
   <input className={styles.input} type="radio" value="three"/>
</li>
<li className={styles.li}>
  <label className={styles.label}>4</label>
   <input className={styles.input} type="radio" value="four" /></li>
<li className={styles.li}>
<label className={styles.label}>5</label>
   <input className={styles.input} type="radio" value="five" />
   </li>
   </ul>
   


    <label className={styles.title}>Notes</label>
    <input type="text" className={styles.inputText}/>

 <label className={styles.title}>Photo URL</label>
    <input type="text" className={styles.inputText}/>
<span>
    <div className={styles.imagewrapper}>
    {/* <img :src="set.photo" alt="" class="form-img" />  */}
    </div>
</span>


    {/* <label>Group</label> */}
    {/* <select v-model="set.group" v-if="groups.length > 0">
<option value="">Select Group</option>
<option :value="group.name" v-for="group of groups" :key="groups.id">{{group.name}}</option>
    </select>
    */}

<div className={styles.buttonArea}>
    <button type="submit" className={styles.submit}>Submit</button>
  </div>
 </form> 

    )}

    export default Form;