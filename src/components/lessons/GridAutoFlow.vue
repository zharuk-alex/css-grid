<template>
  <h2>Grid auto flow</h2>
  <div class="container">
    <div class="item item1">item 1</div>
    <div class="item item2">item 2</div>
    <div class="item item3">item 3</div>
    <div class="item item4">item 4</div>
    <div class="item item5">item 5</div>
    <div class="item item6">item 6</div>
    <div class="item item7">item 7</div>
    <div class="item item8">item 8</div>
    <div class="item item9">item 9</div>
    <div class="item item10">item 10</div>
    <div class="item item11">item 11</div>
    <div class="item item12">item 12</div>
    <div class="item item13">item 13</div>
    <div class="item item14">item 14</div>
    <div class="item item15">item 15</div>
    <div class="item item16">item 16</div>
    <div class="item item17">item 17</div>
    <div class="item item18">item 18</div>
    <div class="item item19">item 19</div>
    <div class="item item20">item 20</div>
    <div class="item item21">item 21</div>
    <div class="item item22">item 22</div>
    <div class="item item23">item 23</div>
    <div class="item item24">item 24</div>
    <div class="item item25">item 25</div>
    <div class="item item26">item 26</div>
    <div class="item item27">item 27</div>
    <div class="item item28">item 28</div>
    <div class="item item29">item 29</div>
    <div class="item item30">item 30</div>
    <div class="item item31">item 31</div>
    <div class="item item32">item 32</div>
    <div class="item item33">item 33</div>
    <div class="item item34">item 34</div>
    <div class="item item35">item 35</div>
    <div class="item item36">item 36</div>
    <div class="item item37">item 37</div>
    <div class="item item38">item 38</div>
    <div class="item item39">item 39</div>
    <div class="item item40">item 40</div>
    <div class="item item41">item 41</div>
    <div class="item item42">item 42</div>
    <div class="item item43">item 43</div>
    <div class="item item44">item 44</div>
    <div class="item item45">item 45</div>
    <div class="item item46">item 46</div>
    <div class="item item47">item 47</div>
    <div class="item item48">item 48</div>
    <div class="item item49">item 49</div>
    <div class="item item50">item 50</div>
    <div class="item item51">item 51</div>
    <div class="item item52">item 52</div>
    <div class="item item53">item 53</div>
    <div class="item item54">item 54</div>
    <div class="item item55">item 55</div>
    <div class="item item56">item 56</div>
    <div class="item item57">item 57</div>
    <div class="item item58">item 58</div>
    <div class="item item59">item 59</div>
    <div class="item item60">item 60</div>
    <div class="item item61">item 61</div>
    <div class="item item62">item 62</div>
    <div class="item item63">item 63</div>
    <div class="item item64">item 64</div>
    <div class="item item65">item 65</div>
    <div class="item item66">item 66</div>
    <div class="item item67">item 67</div>
    <div class="item item68">item 68</div>
    <div class="item item69">item 69</div>
    <div class="item item70">item 70</div>
  </div>
</template>

<script>
  export default {};
</script>

<style scoped>
  .container {
    display: grid;
    grid-gap: 20px;
    /* grid-template-columns: 400px 200px; */
    /* grid-auto-flow: column; */
    /* extra columns width */
    /* grid-auto-columns: 100px;  */
    grid-template-columns: repeat(10, 1fr);
    grid-auto-flow: dense;
  }

  .item:nth-child(6n) {
    background: cornflowerblue;
    grid-column: span 6;
  }
  .item:nth-child(8n) {
    background: tomato;
    grid-column: span 2;
  }

  .item:nth-child(9n) {
    grid-row: span 2;
  }

  .item:nth-child(18n) {
    background: greenyellow;
    grid-column-end: -1;
  }
</style>
