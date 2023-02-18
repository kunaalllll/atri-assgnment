import { useCallback } from "react";
import { callbackFactory } from "../utils/callbackFactory";
export function useNav-containerCb() {
	const onClick = useCallback(callbackFactory("Nav-container", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex9Cb() {
	const onClick = useCallback(callbackFactory("Flex9", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex10Cb() {
	const onClick = useCallback(callbackFactory("Flex10", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useLink2Cb() {

	return {  }
}
export function useLink3Cb() {

	return {  }
}
export function useLink4Cb() {

	return {  }
}
export function useLink5Cb() {

	return {  }
}
export function useLink6Cb() {

	return {  }
}
export function useImage1Cb() {
	const onClick = useCallback(callbackFactory("Image1", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useButton1Cb() {
	const onClick = useCallback(callbackFactory("Button1", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useButton2Cb() {
	const onClick = useCallback(callbackFactory("Button2", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}