/**
 * Copyright (c) JOB TODAY S.A. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from "react";

import {
  ActivityIndicator,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";
import { DimensionsStylesProps } from "../../@types";

export const ImageLoading = () => {
  const SCREEN = useWindowDimensions();
  const SCREEN_WIDTH = SCREEN.width;
  const SCREEN_HEIGHT = SCREEN.height;
  const styles = getStyles({ SCREEN_WIDTH, SCREEN_HEIGHT });
  return (
    <View style={styles.loading}>
      <ActivityIndicator size="small" color="#FFF" />
    </View>
  );
};

const getStyles = ({ SCREEN_WIDTH, SCREEN_HEIGHT }: DimensionsStylesProps) =>
  StyleSheet.create({
    listItem: {
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT,
    },
    loading: {
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT,
      alignItems: "center",
      justifyContent: "center",
    },
    imageScrollContainer: {
      height: SCREEN_HEIGHT,
    },
  });
