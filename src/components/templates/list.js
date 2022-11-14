import { defineAsyncComponent } from 'vue';

export default {
  AlbumTemplate: defineAsyncComponent(() =>
    import('./AlbumTemplate.vue')
  ),
  ImageGalleryTemplate: defineAsyncComponent(() =>
    import('./ImageGalleryTemplate.vue')
  ),
  CodepenTemplate: defineAsyncComponent(() =>
    import('./CodepenTemplate.vue')
  ),
  BootstrappyGrid: defineAsyncComponent(() =>
    import('./BootstrappyGrid.vue')
  ),
  ResponsiveSite: defineAsyncComponent(() =>
    import('./ResponsiveSite.vue')
  ),
  BlogTemplate: defineAsyncComponent(() =>
    import('./BlogTemplate.vue')
  ),
}