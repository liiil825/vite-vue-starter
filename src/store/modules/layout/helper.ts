import { ss } from '@/utils/storage'

const LOCAL_NAME = 'layoutSetting'

export interface LayoutState {
  hidden: boolean
}

export function defaultSetting(): LayoutState {
  return { hidden: false }
}

export function getLocalSetting(): LayoutState {
  const localSetting: LayoutState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalSetting(setting: LayoutState): void {
  ss.set(LOCAL_NAME, setting)
}
