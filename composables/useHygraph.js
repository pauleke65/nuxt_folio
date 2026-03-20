/**
 * useHygraph.js
 * Composable wrappers around useQuery for each Hygraph data type.
 * Centralises error handling and provides safe default values so
 * templates never have to guard against undefined results.
 */

import { useQuery } from '@vue/apollo-composable'
import { computed } from 'vue'
import {
  SITE_DATA_QUERY,
  ALL_TOOLS_QUERY,
  ALL_POSTS_QUERY,
  ALL_PROJECTS_QUERY,
  ALL_CERTIFICATES_QUERY,
  ALL_CATEGORIES_QUERY,
} from '~/graphql/queries'

// ─── Landing Page ─────────────────────────────────────────────────────────────

export function useSiteData() {
  const { result, loading, error } = useQuery(SITE_DATA_QUERY)
  const siteData = computed(() => result.value?.siteData ?? {})
  return { siteData, loading, error }
}

export function useTools() {
  const { result, loading, error } = useQuery(ALL_TOOLS_QUERY)
  const tools = computed(() => result.value?.tools ?? [])
  return { tools, loading, error }
}

// ─── Blog ─────────────────────────────────────────────────────────────────────

export function usePosts() {
  const { result, loading, error } = useQuery(ALL_POSTS_QUERY)
  const posts = computed(() => result.value?.posts ?? [])
  return { posts, loading, error }
}

export function useCategories() {
  const { result, loading, error } = useQuery(ALL_CATEGORIES_QUERY)
  const categories = computed(() => result.value?.categories ?? [])
  return { categories, loading, error }
}

// ─── Projects ─────────────────────────────────────────────────────────────────

export function useProjects() {
  const { result, loading, error } = useQuery(ALL_PROJECTS_QUERY)
  const projects = computed(() => result.value?.projects ?? [])
  return { projects, loading, error }
}

// ─── Certificates ─────────────────────────────────────────────────────────────

export function useCertificates() {
  const { result, loading, error } = useQuery(ALL_CERTIFICATES_QUERY)
  const certificates = computed(() => result.value?.certificates ?? [])
  return { certificates, loading, error }
}
