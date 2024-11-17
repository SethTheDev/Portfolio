import { Canvas } from "@react-three/fiber"
import { MotionConfig, motion } from "framer-motion"
import { motion as motion3d } from "framer-motion-3d"

interface Params {
    isHovered: boolean
}

export function Snake({ isHovered }: Params) {
    return (
        <MotionConfig transition={{ type: "spring" }}>
            <motion.div
            animate={isHovered ? "hover" : "rest"}
            >
                <Canvas shadows dpr={[1, 2]} resize={{ scroll: false, offsetSize: true }}>
                    <motion3d.group>
                        <motion3d.mesh
                            position={[0, 0.01, 4]}
                            rotation={[-0.5, 0.5, 0]}
                            animate={{
                                y: isHovered ? 0.5 : 0,
                                z: isHovered ? 3.5 : 4,
                                rotateY: isHovered ? -0.2 : 0,
                            }}
                        >
                            <torusGeometry args={[0.2, 0.1, 10, 50]} />
                            <meshPhongMaterial/>
                        </motion3d.mesh>
                        <motion3d.mesh
                            position={[-1, 0.01, 4]}
                            rotation={[-0.5, 0.5, 0]}
                            animate={{
                                y: isHovered ? 0.5 : 0,
                                z: isHovered ? 3.5 : 2,
                                rotateY: isHovered ? -0.2 :  0,
                            }}
                        >
                            <torusGeometry args={[0.2, 0.1, 10, 50]} />
                            <meshPhongMaterial/>
                        </motion3d.mesh>
                        <motion3d.mesh
                            position={[1, 0.01, 4]}
                            rotation={[-0.5, 0.5, 0]}
                            animate={{
                                y: isHovered ? 0.5 : 0,
                                z: isHovered ? 3.5 : 2,
                                rotateY: isHovered ? -0.2 : 0,
                            }}
                        >
                            <torusGeometry args={[0.2, 0.1, 10, 50]} />
                            <meshPhongMaterial/>
                        </motion3d.mesh>
                    </motion3d.group>
                </Canvas>
            </motion.div>
        </MotionConfig>
    )
}