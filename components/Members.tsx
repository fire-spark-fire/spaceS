import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Mail } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MEMBERS } from "@/constants/default"

export default function Members() {
    return (
        <section id="members" className="py-20 px-4 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-transparent"></div>
            <div className="container mx-auto relative">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent tracking-tight">
                        Spark 大家庭
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        一起成长，一起创新，一起创造不平凡
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-4 md:gap-6">
                    {MEMBERS.map((member, index) => (
                        <Card
                            key={index}
                            className="bg-gray-900/50 border-red-600/20 hover:border-orange-500/50 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
                        >
                            <CardHeader className="text-center">
                                <div className="mx-auto mb-4 w-20 h-20 bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-full flex items-center justify-center shadow-lg shadow-red-500/25">
                                <Image src={`https://robohash.org/${member.nickname}`} width={100} height={100} alt={member.nickname} />
                                </div>
                                <CardTitle className="text-xl text-orange-400 tracking-wide">{member.nickname}</CardTitle>
                            </CardHeader>
                            <CardContent className="hidden sm:block text-center">
                                <CardDescription className="hidden md:block text-gray-300 mb-4 leading-relaxed">
                                    {member.introduction}
                                </CardDescription>
                                <Link
                                    href={member.contact}
                                    className="inline-flex items-center space-x-2 text-red-500 hover:text-orange-500 transition-colors duration-300"
                                >
                                    <Mail className="w-4 h-4" />
                                    <span>Contact</span>
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

    )
}