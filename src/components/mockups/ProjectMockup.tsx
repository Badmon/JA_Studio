import type { MockupVariant } from '../../data/projects'
import { CorporateMockup } from './CorporateMockup'
import { InventoryMockup } from './InventoryMockup'
import { ManagementMockup } from './ManagementMockup'

export function ProjectMockup({ variant }: { variant: MockupVariant }) {
  switch (variant) {
    case 'inventory':
      return <InventoryMockup />
    case 'corporate':
      return <CorporateMockup />
    case 'management':
      return <ManagementMockup />
  }
}
