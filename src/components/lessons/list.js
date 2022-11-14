import { defineAsyncComponent } from 'vue';

export default {
  ColsRows: defineAsyncComponent(() =>
    import('./ColsRows.vue')
  ),
  GridAutoFlow: defineAsyncComponent(() =>
    import('./GridAutoFlow.vue')
  ),
  SizingTracks: defineAsyncComponent(() =>
    import('./SizingTracks.vue')
  ),
  RepeatFunc: defineAsyncComponent(() =>
    import('./RepeatFunc.vue')
  ),
  SizingItems: defineAsyncComponent(() =>
    import('./SizingItems.vue')
  ),
  PlacingGrid: defineAsyncComponent(() =>
    import('./PlacingGrid.vue')
  ),
  FillFit: defineAsyncComponent(() =>
    import('./FillFit.vue')
  ),
  TemplateAreas: defineAsyncComponent(() =>
    import('./TemplateAreas.vue')
  ),
  NamingLines: defineAsyncComponent(() =>
    import('./NamingLines.vue')
  ),
  AligmentCentering: defineAsyncComponent(() =>
    import('./AligmentCentering.vue')
  ),
  ReorderingItems: defineAsyncComponent(() =>
    import('./ReorderingItems.vue')
  ),
  FlexVsGrid: defineAsyncComponent(() =>
    import('./FlexVsGrid.vue')
  ),
}