<template>
  <div class="home">
    <h1>🏠 review 페이지</h1>
    <!-- 리뷰 카드 목록 -->
    <div class="reviews">
      <div class="review-card" v-for="(review, i) in reviews" :key="i">
        <h3>{{ review.user }}</h3>
        <p>{{ review.comment }}</p>
        <span>{{ "⭐".repeat(review.rating) }}</span>
      </div>
    </div>
  </div>
</template>
<script setup>
const reviews = [
  { user: "민지", comment: "서비스가 정말 좋아요!", rating: 5 },
  { user: "현우", comment: "배송도 빠르고 친절했습니다 😊", rating: 4 },
  { user: "수연", comment: "깔끔하고 만족스러워요!", rating: 5 },
];
</script>
<style lang="scss" scoped>
.home {
  padding-top: 100px;
  text-align: center;
  .reviews {
    display: grid;
    grid-template-columns: repeat(auto-fit , minmax(200px , 1fr));
    gap: 20px;

    .review-card {
      background: #fff;
      border-radius: 16px;
      padding: 20px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      transition: 0.3s;

      h3 {
        margin-bottom: 10px;
      }

      span {
        display: inline-block;
        margin-top: 10px;
        font-weight: bold;
      }
    }
  }
}
</style>
